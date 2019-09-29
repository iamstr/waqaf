import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MyDrawerNavigator from "./screens/Home";
import Login from "./screens/Login";

const RootStack = createStackNavigator(
  {
    Home: MyDrawerNavigator,
    Login
  },
  {
    initialRouteName: "Login"
  }
);

const MyApp = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return <MyApp style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#F5FCFF"
    backgroundColor: "black"
  },
  app: {
    backgroundColor: "#F5FCFF"
  }
});
