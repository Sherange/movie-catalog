import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MainStack from './MainStack';
import SearchStack from './SearchStack';
import {
  backgroundColor,
  secondryTextColor,
  primaryColor,
  primaryTextColor,
} from '../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: backgroundColor, borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              size={30}
              color={focused ? primaryColor : secondryTextColor}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? primaryTextColor : secondryTextColor,
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="file-search"
              size={30}
              color={focused ? primaryColor : secondryTextColor}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? primaryTextColor : secondryTextColor,
              }}>
              Title
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
