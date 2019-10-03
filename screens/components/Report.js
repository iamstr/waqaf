import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
export default class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const gradient = `linear-gradient(23deg, rgba(30,10,209,1) 0%, rgba(18,166,226,1) 59%)`;
    return (
      <LinearGradient
        colors={["rgba(30,10,209,1) ", " rgba(18,166,226,1)"]}
        style={styles.container}
      >
        <View style={styles.box}>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.info}>Ali</Text>
          <Text style={styles.header}>House No</Text>
          <Text style={styles.info}>22224</Text>
          <Text style={styles.header}>Amount due</Text>
          <Text style={styles.info}>0</Text>
        </View>

        <View>
          <Icon name="ios-person" type="ionicon" color="white" />
        </View>
      </LinearGradient>
    );
  }
}

<Icon name="person" type="ionicon" color="#fffff" />;
const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 7,
    borderRadius: 10,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  header: {
    paddingTop: 15,
    fontWeight: "bold",
    color: "#cfd0d1",
    fontSize: 25
  },
  box: {
    flex: 1,
    flexDirection: "column"
  },
  info: {
    paddingBottom: 10,
    fontWeight: "300",
    fontSize: 18,
    color: "white"
  },
  icon: {
    width: 128,
    height: 128,
    paddingTop: 15,
    paddingBottom: 15
  }
});
