import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import List from "./components/List";
import Report from "./components/Report";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./icons8-user-90.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Report image={require("./icons8-user-90.png")} />
        <List />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./icons8-commercial-90.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Notifications: {
    screen: MyNotificationsScreen
  }
});

//const MyApp = createAppContainer(MyDrawerNavigator);
