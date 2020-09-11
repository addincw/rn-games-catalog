import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import appStyles from "../global/Styles";

function HomeScreen({ navigation }) {
  const [games, setGames] = useState([
    { key: "1", title: "Super Mario", rate: 5 },
    { key: "2", title: "Crash Bandicot", rate: 3 },
    { key: "3", title: "Jackie Chan", rate: 4 },
  ]);
  return (
    <View style={appStyles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("DetailScreen", item)}
          >
            <Text style={appStyles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginBottom: 15,
    padding: 15,
  },
});

export default HomeScreen;
