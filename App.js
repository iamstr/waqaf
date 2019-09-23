import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Login from "./screens/Login";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login style={styles.login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column",
    paddingLeft: 15,
    paddingRight: 15
  },
  login: {
    paddingBottom: 20,
    paddingTop: 20
  }
});
