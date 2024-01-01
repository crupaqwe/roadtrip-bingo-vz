import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LobbyChoiceScreen from '../screens/LobbyChoiceScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LobbyChoiceScreen" component={LobbyChoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}