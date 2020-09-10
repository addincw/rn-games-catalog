import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// list screens in stack, first stack will load default
const GameStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    DetailScreen: {
        screen: DetailScreen
    },
})

//rendering match route/screen
export default createAppContainer(GameStack)