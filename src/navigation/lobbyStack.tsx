import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LobbyChoice from '../screens/lobby/LobbyChoice';
import CreateLobby from '../screens/lobby/CreateLobby';
import JoinLobby from '../screens/lobby/JoinLobby';

const Stack = createStackNavigator();

const LobbyChoiceStack = () => {
  return (
    <Stack.Navigator initialRouteName="LobbyChoiceScreen">
      <Stack.Screen name="LobbyChoice" component={LobbyChoice} />
      <Stack.Screen name="CreateLobby" component={CreateLobby} />
      <Stack.Screen name="JoinLobby" component={JoinLobby} />
    </Stack.Navigator>
  );
};

export default LobbyChoiceStack;
