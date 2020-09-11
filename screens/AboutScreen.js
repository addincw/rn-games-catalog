import React from "react";
import { View, Text, StyleSheet } from "react-native";

import appStyles from "../global/Styles";

function AboutScreen() {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.text}>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutScreen;
