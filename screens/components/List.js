import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    name: "Current Reading",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "0"
  },
  {
    name: "Previous Reading",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "0"
  },
  {
    name: "Consumption",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "0"
  },
  {
    name: "Balance Brought Forward",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "0"
  }
];

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    color: "#cfd0d1",
    fontSize: 20,
    paddingLeft: 15
  },
  linear: {
    paddingVertical: 15,
    backgroundColor: "#02046b"
  }
});

export default class List extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          />
        ))}
        <View>
          <View style={styles.linear}>
            <Text style={styles.text}> Current Charges</Text>
          </View>

          <ListItem title="Water Charges" subtitle="120" bottomDivider />
        </View>
      </View>
    );
  }
}
