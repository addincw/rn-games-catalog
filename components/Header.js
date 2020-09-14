import { MaterialIcons } from "@expo/vector-icons";

import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import appImages from "../global/Images";
import appStyles from "../global/Styles";

function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={appImages.background}
      style={{ ...appStyles.container, ...styles.header }}
    >
      <MaterialIcons
        name="menu"
        size={24}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image source={appImages.logo} style={styles.logo} />
        <Text style={appStyles.text}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -15,
    marginHorizontal: -15,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: 15,
  },
  logo: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});

export default Header;
