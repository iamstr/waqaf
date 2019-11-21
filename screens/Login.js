import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Alert, AsyncStorage, StatusBar, StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default class Login extends React.Component {
  static navigationOptions = {
    title: "Waqaf",
    headerStyle: {
      backgroundColor: "rgba(30,10,209,1)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      phone: ""
    };
  }

  auth(phone, user) {
    AsyncStorage.setItem("phone", phone);
    AsyncStorage.setItem("user", user);

    fetch("http://192.168.1.170/mosque/resources/api/get_client.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        user: this.state.user,
        password: this.state.phone
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
            <Input
              label="phone Number"
              onChangeText={phone =>
                this.setState({
                  phone
                })
              }
            />
          </View>
          <View style={styles.input}>
            <Input
              label="House Number"
              onChangeText={user =>
                this.setState({
                  user
                })
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Login"
              onPress={() => this.auth(this.state.phone, this.state.user)}
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
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
