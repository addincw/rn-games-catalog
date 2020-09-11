import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import GameStack from "./GameStack";
import AboutStack from "./AboutStack";

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: GameStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(AppDrawer);
