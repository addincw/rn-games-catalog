import React from "react";
import { View, Text, StyleSheet } from "react-native";

import appStyles from "../global/Styles";

function DetailScreen({ navigation }) {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.text}>{navigation.getParam("title")}</Text>
      <Text style={appStyles.text}>rate: {navigation.getParam("rate")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default DetailScreen;
