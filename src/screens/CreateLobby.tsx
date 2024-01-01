import React, { useState } from 'react';
import { View, TextInput, Button, Text, Switch, StyleSheet } from 'react-native';
import { createLobby } from '../utils/services/createLobby'; 

const LobbiesScreen = () => {
  const [lobbyName, setLobbyName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState('4'); // Default to 4 players
  const [isPublic, setIsPublic] = useState(true);

  const handleCreateLobby = async () => {
    if (lobbyName.trim() === '' || isNaN(Number(maxPlayers))) {
      alert('Please fill in all fields correctly.');
      return;
    }
  
    const hostUserId = 'user123'; // Replace with the actual user ID from your auth state
    try {
      const lobbyId = await createLobby({
        name: lobbyName,
        hostUserId,
        maxPlayers: Number(maxPlayers),
        visibility: isPublic ? 'public' : 'private',
      });
      console.log(`Lobby created with ID: ${lobbyId}`);
      // Navigate to the lobby page or show success message
    } catch (error) {
      console.error('Failed to create lobby:', error);
      // Handle errors, such as displaying an alert
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Lobby Name"
        value={lobbyName}
        onChangeText={setLobbyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Max Players"
        value={maxPlayers}
        keyboardType="number-pad"
        onChangeText={setMaxPlayers}
      />
      <View style={styles.toggleContainer}>
        <Text>Public Lobby:</Text>
        <Switch
          value={isPublic}
          onValueChange={setIsPublic}
        />
      </View>
      <Button
        title="Create Lobby"
        onPress={handleCreateLobby}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // white background for a clean look
    alignItems: 'center', // center items horizontally
  },
  input: {
    height: 50, // increased height for better touch area
    borderColor: '#ccc', // lighter border color
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15, // more horizontal padding
    width: '100%', // full width inputs
    borderRadius: 5, // rounded corners
    fontSize: 16, // larger font size for better readability
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%', // full width container for switch and label
    paddingVertical: 10, // vertical padding
  },
  toggleLabel: {
    fontSize: 18, // larger font size for the label
  },
  switch: {
    // If you need to style the switch, you can do so here
  },
  button: {
    backgroundColor: '#1e90ff', // a pleasant blue color for the button
    paddingVertical: 15, // vertical padding for the button
    paddingHorizontal: 30, // horizontal padding
    borderRadius: 5, // rounded corners
    width: '100%', // full width button
    marginTop: 10, // margin on top of the button
  },
  buttonText: {
    color: '#fff', // white text color
    fontSize: 18, // larger font size
    textAlign: 'center', // center the text
  },
});


export default LobbiesScreen;
