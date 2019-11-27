import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
<<<<<<< HEAD

=======
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("test.db");
>>>>>>> master-sqlite
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
  constructor(props) {
    super(props);
<<<<<<< HEAD
  }
  render() {
    const { info } = this.props;
=======
    this.state = {};
  }
  _getData = async () => {
    db.transaction(tx => {
      tx.executeSql("select * from readings", [], (_, { rows }) => {
        let obj;
        obj = rows._array[0];
        this.setState({ ...obj });
        console.log(
          "this is the object from the report ",

          JSON.stringify(rows)
        );
        return obj;
      });
    });
  };
  componentDidMount() {
    this._getData().then(obj => {
      console.log(obj, "=>this is the state");
    });
  }
  render() {
>>>>>>> master-sqlite
    const list = [
      {
        name: "Current Reading",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
<<<<<<< HEAD
        subtitle: info.current || 0
=======
        subtitle: this.state.current
>>>>>>> master-sqlite
      },
      {
        name: "Previous Reading",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
<<<<<<< HEAD
        subtitle: info.previous || 0
=======
        subtitle: this.state.previous
>>>>>>> master-sqlite
      },
      {
        name: "Consumption",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
<<<<<<< HEAD
        subtitle: info.consumption || 0
=======
        subtitle: this.state.consumption
>>>>>>> master-sqlite
      },
      {
        name: "Balance Brought Forward",
        avatar_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
<<<<<<< HEAD
        subtitle: info.balance || 0
=======
        subtitle: this.state.balance
>>>>>>> master-sqlite
      }
    ];
    return (
      <View style={{ flex: 1 }}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            subtitle={this.props.info.subtitle}
            bottomDivider
          />
        ))}
        <View>
          <View style={styles.linear}>
            <Text style={styles.text}> Current Charges</Text>
          </View>

          <ListItem
            title="Water Charges"
<<<<<<< HEAD
            subtitle={this.props.info.water_charges}
=======
            subtitle={this.state.water_charges}
>>>>>>> master-sqlite
            bottomDivider
          />
        </View>
      </View>
    );
  }
}
