import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Submit from "./components/Button";
import LoginField from "./components/LoginField";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginField />
        <View>
          <Submit />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
