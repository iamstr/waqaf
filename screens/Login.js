import * as React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="add" style={styles.input} />
        <Button
          title="Send"
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "blue"
  },
  button: {
    backgroundColor: "blue",
    color: "#88FDE7"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
