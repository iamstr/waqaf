import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import List from "./components/List";
import Report from "./components/Report";
import Leakage from "./Leakage";
import Logout from "./Logout";
import Payment from "./Payments";

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
    ),
    headerStyle: {
      backgroundColor: "rgba(30,10,209,1)"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <ScrollView>
        <Report
          image={require("./icons8-user-90.png")}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            height: 20
          }}
        />
        <List />
      </ScrollView>
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
  Payment: {
    screen: Payment
  },
  Report: {
    screen: Leakage
  },
  Logout: {
    screen: Logout
  }
});

//const MyApp = createAppContainer(MyDrawerNavigator);
