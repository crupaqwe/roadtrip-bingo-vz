import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LobbyChoiceScreen from '../screens/LobbyChoiceScreen';
import CreateLobbyScreen from '../screens/CreateLobby';
import JoinLobbyScreen from '../screens/JoinLobby';

const Stack = createStackNavigator();

const LobbyChoiceStack = () => {
  return (
    <Stack.Navigator initialRouteName="LobbyChoiceScreen">
      <Stack.Screen name="LobbyChoiceScreen" component={LobbyChoiceScreen} />
      <Stack.Screen name="CreateLobbyScreen" component={CreateLobbyScreen} />
      <Stack.Screen name="JoinLobbyScreen" component={JoinLobbyScreen} />
    </Stack.Navigator>
  );
};

export default LobbyChoiceStack;
