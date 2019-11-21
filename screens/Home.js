import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import List from "./components/List";
import Report from "./components/Report";
import logo from "./icons8-user-90.png";
import Leakage from "./Leakage";
import Logout from "./Logout";
import Payment from "./Payments";
// const MenuIcon = ({ navigate }) => (
//   <Icon
//     name="three-bars"
//     size={30}
//     color="#000"
//     onPress={() => navigate("DrawerOpen")}
//   />
// );
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image source={logo} style={[styles.icon, { tintColor: tintColor }]} />
    ),
    // headerRight: () => MenuIcon(this.props.navigation),
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
        <Report image={require("./icons8-user-90.png")} style={styles.report} />
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
  },
  report: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 20
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
