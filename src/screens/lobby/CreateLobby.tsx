import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Switch,
  StyleSheet,
  Alert,
} from "react-native";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { createLobby } from "../../utils/services/createLobby"; // Adjust the import path as needed
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // Adjust the import path as needed

// Define the navigation prop based on the RootStackParamList
type CreateLobbyNavigationProp = StackNavigationProp<RootStackParamList>;


const CreateLobby: React.FC = () => {
  const [lobbyName, setLobbyName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("4");
  const [isPublic, setIsPublic] = useState(true);
  const navigation = useNavigation<CreateLobbyNavigationProp>();

  const handleCreateLobby = async () => {
    if (lobbyName.trim() === "" || isNaN(Number(maxPlayers))) {
      Alert.alert("Error", "Please fill in all fields correctly.");
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Error", "You must be signed in to create a lobby.");
      return;
    }

    try {
      const lobbyId = await createLobby({
        name: lobbyName,
        hostUserId: user.uid,
        maxPlayers: Number(maxPlayers),
        visibility: isPublic ? "public" : "private",
        players: {
          [user.uid]: {
            name: user.displayName || "Anonymous", // Fallback to 'Anonymous' if displayName is not set
            ready: false,
            gotBingo: false,
          },
        },
      });

      // Navigate to the Lobby Details screen with the new lobby ID
      navigation.navigate('LobbyDetails', { lobbyId: lobbyId });
    } catch (error) {
      Alert.alert("Error", `Failed to create lobby: ${error}`);
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
        <Switch value={isPublic} onValueChange={setIsPublic} />
      </View>
      <Button
        title="Create Lobby"
        onPress={handleCreateLobby}
        color="#1e90ff" // Use your theme color here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center the content vertically
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  // Add any additional styles you might need
});

export default CreateLobby;
