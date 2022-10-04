import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import TitleScreen from '../screens/TitleScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
          headerTransparent: false,
        }}
      />
      <MainStack.Screen
        name="TitleScreen"
        component={TitleScreen}
        options={{
          headerShown: false,
          headerTransparent: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
