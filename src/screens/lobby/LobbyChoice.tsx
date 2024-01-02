// LobbyChoiceScreen.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // Adjust the import path as needed

// Define the navigation prop based on the RootStackParamList
type LobbyChoiceNavigationProp = StackNavigationProp<RootStackParamList>;

const LobbyChoice: React.FC = () => {
  const navigation = useNavigation<LobbyChoiceNavigationProp>();

  return (
    <View style={styles.container}>
      <Button
        title="Host a Lobby"
        onPress={() => navigation.navigate('CreateLobbyScreen')}
      />
      <Button
        title="Join a Lobby"
        onPress={() => navigation.navigate('JoinLobbyScreen')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7', // A light gray background
  },
  button: {
    backgroundColor: '#1e90ff', // A pleasant blue
    padding: 15,
    borderRadius: 5,
    marginVertical: 10, // Adds margin above and below the button
    width: '80%', // Makes the button take 80% of container width
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default LobbyChoice;
