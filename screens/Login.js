import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StatusBar, StyleSheet, View, AsyncStorage } from "react-native";

import { Button, Input } from "react-native-elements";
import config from "../lib/config";

export default class Login extends React.Component {
  static navigationOptions = navigation => ({
    title: "Waqaf",
    headerStyle: {
      backgroundColor: "rgba(30,10,209,1)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  });
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      phone: "",
      name: "",
      clients_id: ""
    };
  }
  async _store(state) {
    try {
      return {
        user_id: await AsyncStorage.setItem(
          "clients_id",
          JSON.stringify(state.clients_id)
        ),
        house: await AsyncStorage.setItem("house", JSON.stringify(state.house)),
        name: await AsyncStorage.setItem("name", JSON.stringify(state.name)),
        phone: await AsyncStorage.setItem("phone", JSON.stringify(state.phone))
      };
    } catch (error) {
      console.log(error.message);
    }
  }
  async auth(phone, user) {
    try {
      let phoneAsync = await AsyncStorage.setItem("phone", phone);
      let userAsync = await AsyncStorage.setItem("user", user);
      let formBody = [];

      const dbData = new FormData();
      dbData.append("userName", user);
      dbData.append("phoneNumber", phone);
      for (let property in this.state) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(this.state[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      fetch(`${config.url}client`, {
        method: "POST",
        body: dbData
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.hasOwnProperty("userID")) {
            console.log(responseJson);

            this.setState({ ...responseJson });
            this._stored(this.setState({ ...responseJson }))
              .then(function() {})
              .catch(function(error) {
                console.log(
                  "There has been a problem with async storage  " +
                    error.message
                );
              });
            let userID = AsyncStorage.getItem("name");
            return console.log(JSON.stringify({ ...this.state }));

            this.props.navigation.navigate("Home", { ...this.state });
            //
          }

          //
        })
        .catch(function(error) {
          console.log("There has been a problem  " + error.message);
        });
    } catch (error) {
      console.log(`this was the error ${error}`);
    }
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
