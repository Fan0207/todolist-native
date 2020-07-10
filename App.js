import React, { useState } from "react";
import "./App.css";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

/*class App extends Component {
  state = {
    tasks: [
      { id: 1, title: "Faire l'exo météo" },
      { id: 2, title: "Faire l'exo MERISE" },
      { id: 2, title: "Faire symfony" },
    ],
  };

  hello() {
    console.log("coucou");
  }
*/
//render() {

function App() {
  return (
    <FlatList
      renderItem={({ item }) => (
        <View style={styles.task}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <TouchableOpacity onPress={this.hello}>
            <MaterialIcons name="delete" size={32} color="white" />
          </TouchableOpacity>
        </View>
      )}
      keyExtrator={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    padding: 20,
    margin: 5,
    width: 300,
    backgroundColor: "lightseagreen",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    color: "white",
    fontSize: 20,
  },
});

export default App;
