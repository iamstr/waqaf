import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const gradient = `linear-gradient(23deg, rgba(30,10,209,1) 0%, rgba(18,166,226,1) 59%)`;
    return (
      <View
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
          <Image source={this.props.image} style={styles.icon}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
    borderRadius: 5,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  header: {
    paddingTop: 5,
    fontWeight: "bold"
  },
  box: {
    flex: 1,
    flexDirection: "column"
  },
  info: {
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 10
  },
  icon: {
    width: 48,
    height: 48
  }
});
