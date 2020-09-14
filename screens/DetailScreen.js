import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import appStyles from "../global/Styles";
import appImages from "../global/Images";

function DetailScreen({ navigation }) {
  const rate = navigation.getParam("rate");

  return (
    <View style={{ ...appStyles.container, ...styles.container }}>
      <View>
        <Text style={appStyles.text}>{navigation.getParam("title")}</Text>
        <Text style={appStyles.text}>
          rate: <Image source={appImages.rating[rate]}></Image>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailScreen;
