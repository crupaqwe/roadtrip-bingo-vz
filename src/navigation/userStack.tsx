import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/init/Home';
import Profile from '../screens/init/Profile';
import LobbyActionChoice from "../screens/lobby/LobbyActionChoice";
import CreateLobby from "../screens/lobby/CreateLobby";
import JoinLobby from "../screens/lobby/PublicLobbies";
import LobbyDetails from "../screens/lobby/LobbyDetails";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LobbyActionChoice" component={LobbyActionChoice} />
        <Stack.Screen name="CreateLobby" component={CreateLobby} />
        <Stack.Screen name="LobbyDetails" component={LobbyDetails} />
        <Stack.Screen name="JoinLobby" component={JoinLobby} />
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}