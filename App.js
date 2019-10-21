import React from 'react';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import TestScreen from './src/screens/TestScreen';
import TravelScreen from './src/screens/TravelScreen';
import { Component } from 'react';
import { View,Text} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';








const TabNavigator = createBottomTabNavigator(
  {
  Travel: TravelScreen,
 // Settings: Sett,
   Home: HomeScreen,
},{
  defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    if (routeName === 'Travel') {
      return (      
          <Icon name='briefcase' size={30}/>
      );
    } else {
      return (
        <Icon name='home' size={30}/>
      );
    }
  },
}),
tabBarOptions: {
  labelStyle: {
    fontSize: 12,
    fontWeight:'bold'
  },
  // activeBackgroundColor:'rgb(114, 143, 142)' ,
  activeTintColor : '#FF6F00',
  inactiveTintColor: '#263238',
},
}
);


const navigator = createStackNavigator(
  {
    // Home: HomeScreen,
    // Image: ImageScreen,
    // Images: ImagesScreen,
    // Test: TestScreen,
    Travel: TabNavigator,
  },
  {
    initialRouteName: 'Travel',
    headerMode:'none',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
