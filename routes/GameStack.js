import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Header from "../components/Header";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="GamesCatalog" />
        ),
      };
    },
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam("title"),
      };
    },
  },
};
const options = {
  defaultNavigationOptions: {
    headerTitleStyle: {
      marginTop: 12,
      fontFamily: "pixel-regular",
      fontSize: 10,
    },
  },
};
// list screens in stack, first stack will load default
const GameStack = createStackNavigator(screens, options);

/** jika merupakan root navigation (tidak ada stack lain / navigation lain)
 * render navigation match route/screen
 * jika ada, export default stack */
//rendering match route/screen
// export default createAppContainer(GameStack);
export default GameStack;
