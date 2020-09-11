import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Header from "../components/Header";

import AboutScreen from "../screens/AboutScreen";

const screens = {
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />,
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
const AboutStack = createStackNavigator(screens, options);

/** jika merupakan root navigation (tidak ada stack lain / navigation lain)
 * render navigation match route/screen
 * jika ada, export default stack */
// export default createAppContainer(AboutStack);
export default AboutStack;
