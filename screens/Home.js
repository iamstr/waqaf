import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import config from "../lib/config";
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

    this.state = {
      house: "",
      name: "",
      phone: "",
      amount_due: "",
      current: "",
      previous: "",
      consumption: "",
      balance: "",
      water_charges: "",
      userID: ""
    };
  }
  async _getData() {
    try {
      const name = await AsyncStorage.getItem("username");
      const userID = await AsyncStorage.getItem("userID");
      const house = await AsyncStorage.getItem("house");
      const phone = await AsyncStorage.getItem("username");

      this.setState({ name, house, userID });
      const obj = this.state;
      return obj;
    } catch (error) {
      console.log(error.message);
    }
  }
  componentDidMount() {
    this._getData()
      .then(function(obj) {
        console.log(obj);
      })
      .catch(error => {
        console.log(
          " we could not understand what you were impplying" + error.message
        );
      });

    // fetch(
    //   ` http://192.168.1.204/mosque/resources/api/get_info.php?user=${obj.userID}`,
    //   {
    //     method: "GET"
    //   }
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson);
    //     this.setState({
    //       balance: responseJson.balance,
    //       amount_due: responseJson.amount_due,
    //       water_charges: responseJson.water_charges,
    //       previous: responseJson.previous,
    //       current: responseJson.current,
    //       consumption: responseJson.consumption
    //     });
    //     return Alert.alert(JSON.stringify(responseJson));
    //   })
    //   .catch(function(error) {
    //     Alert.alert("There has been a problem  " + error.message);
    //     console.log(error.message);
    //   });
  }

  static navigationOptions = ({ navigation }) => ({
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
  });

  render() {
    const { navigation } = this.props;
    const obj = {
      house: JSON.stringify(navigation.getParam("house", "house")),
      username: JSON.stringify(navigation.getParam("username", "user")),
      phone: JSON.stringify(navigation.getParam("phone", "phone")),
      userID: JSON.stringify(navigation.getParam("userID", "userID"))
    };

    navigation.getParam("UserID", "NO-ID");
    console.log(JSON.stringify(navigation.getParam("house", " of testing")));
    return (
      <ScrollView>
        <Report
          image={require("./icons8-user-90.png")}
          style={styles.report}
          info={this.state}
        />
        <List info={this.state} />
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
