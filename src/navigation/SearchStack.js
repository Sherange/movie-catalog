import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import TitleScreen from '../screens/TitleScreen';

const SearchStack = createNativeStackNavigator();

const SearchStackNavigation = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          headerTransparent: false,
        }}
      />
      <SearchStack.Screen
        name="TitleScreen"
        component={TitleScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigation;
