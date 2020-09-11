import { MaterialIcons } from "@expo/vector-icons";

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import appStyles from "../global/Styles";

function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{ ...appStyles.container, ...styles.header }}>
      <MaterialIcons
        name="menu"
        size={24}
        onPress={openMenu}
        style={styles.icon}
      />
      <Text style={appStyles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    top: 4,
    left: 0,
  },
});

export default Header;
