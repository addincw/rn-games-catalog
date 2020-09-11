import { StyleSheet, StatusBar, Platform } from "react-native";

import appColors from "./Colors";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: appColors.base,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: "pixel-regular",
    fontSize: 10,
  },
});

export default styles;
