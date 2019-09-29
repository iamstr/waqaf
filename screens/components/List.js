import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
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
  }
});

export default class List extends Component {
  render() {
    return (
      <View style={styles.list}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
          />
        ))}
      </View>
    );
  }
}
