import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import appStyles from "../global/Styles";
import FormScreen from "./FormScreen";

function HomeScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [games, setGames] = useState([
    { key: "1", title: "Super Mario", rate: 5 },
    { key: "2", title: "Crash Bandicot", rate: 3 },
    { key: "3", title: "Jackie Chan", rate: 4 },
  ]);

  const addGame = (game) => {
    game.key = Math.random.toString();
    setGames((currentGames) => {
      return [game, ...currentGames];
    });
    setModalOpen(false);
  };

  return (
    <View style={{ ...appStyles.container, paddingBottom: 15 }}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={{ flex: 1 }}>
          <MaterialIcons
            style={styles.modalClose}
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <FormScreen addGame={addGame} />
        </View>
      </Modal>

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

      <Button title="New Game" color="red" onPress={() => setModalOpen(true)} />
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
  modalClose: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});

export default HomeScreen;
