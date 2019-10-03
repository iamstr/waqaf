import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class Logout extends Component {
  static navigationOptions = {
    drawerLabel: "Report Leakage",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./icons8-commercial-90.png")}
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
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <LinearGradient
        colors={["rgba(30,10,209,1) ", " rgba(18,166,226,1)"]}
        style={styles.bg}
      >
        <Text style={styles.text}>Do you want to send Leakage Report?</Text>

        <View style={styles.button}>
          <Button
            title="No"
            style={styles.no}
            color="white"
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <Button
            title="Yes"
            style={styles.yes}
            backgroundColor="white"
            color="#fff"
            onPress={() => this.props.navigation.navigate("Leakage")}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  text: { fontSize: 25, color: "#fff", paddingHorizontal: 10 },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    width: "100%",
    marginTop: 10
  },
  no: {
    borderColor: "rgba(30,10,209,1)",
    width: "100%",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 15
  },
  yes: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 15
  },
  icon: {
    width: 24,
    height: 24
  }
});
