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
  textDanger: {
    color: "crimson",
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
});

export default styles;
