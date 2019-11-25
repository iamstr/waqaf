import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
const MenuIcon = ({ navigate }) => (
  <Icon
    name="three-bars"
    size={30}
    color="#000"
    onPress={() => navigate("DrawerOpen")}
  />
);
export default class Payment extends React.Component {
  static navigationOptions = {
    title: "Waqaf",
    headerStyle: {
      backgroundColor: "rgba(30,10,209,1)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: () => MenuIcon(this.props.navigation),

    drawerLabel: "Make Payment",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./icons8-money-90.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  constructor(props) {
    super(props);

    this.state = {};
  }
  send() {
    fetch("http://192.168.1.170/mosque/resources/api/payment.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: this.state.code,
        client_id: AsyncStorage.getItem("userID")
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        Alert.alert(responseJson);
        AsyncStorage.setItem("user_id", responseJson.userID);
      })
      .catch(function(error) {
        Alert.alert("There has been a problem  " + error.message);
      });
  }
  render() {
    return (
      <LinearGradient
        colors={["rgba(30,10,209,1) ", " rgba(18,166,226,1)"]}
        style={styles.bg}
      >
        <StatusBar
          backgroundColor="rgba(30,10,209,1)"
          barStyle="light-content"
        />

        <View style={styles.container}>
          <View style={styles.input}>
            <Text>Pay Your Water Bills</Text>
          </View>
          <View style={styles.input}>
            <Text>Lipa na M-Pesa</Text>
            <Text>006321</Text>
          </View>
          <View>
            <Input
              label="M-pesa Code"
              onChangeText={code =>
                this.setState({
                  code
                })
              }
            />
          </View>
          <View style={styles.button}>
            <Button title="Send" onPress={() => this.send} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  input: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "blue",
    color: "#fff",
    marginBottom: 15
  },
  button: {
    color: "#88FDE7",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 15
  },
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    width: "70%"
    // backgroundColor: "#F5FCFF"
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
