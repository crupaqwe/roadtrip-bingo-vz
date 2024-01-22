import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, child, get } from 'firebase/database';
import { RouteProp } from '@react-navigation/native';
import { leaveLobby } from '../../utils/services/leaveLobby';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // Adjust the import path as needed
import { useNavigation } from "@react-navigation/native";

// Define the navigation prop based on the RootStackParamList
type LobbyDetailsNavigationProp = StackNavigationProp<RootStackParamList>;

const LobbyDetailsScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'LobbyDetails'>>();
  const lobbyId = route.params?.lobbyId;
  const [lobby, setLobby] = useState<any | null>(null);
  const [players, setPlayers] = useState<any[]>([]);
  const [userID, setUserID] = useState<string | null>(null);

  const auth = getAuth();
  const navigation = useNavigation<LobbyDetailsNavigationProp>();

  // Use onAuthStateChanged to listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        setUserID(null);
      }
    });

    return () => unsubscribe(); // Cleanup when the component unmounts
  }, []);

  useEffect(() => {
    if (lobbyId) {
      const fetchLobbyDetails = async () => {
        try {
          const db = getDatabase();
          const lobbyRef = ref(db, `lobbies/${lobbyId}`);
          const snapshot = await get(child(lobbyRef, '/'));
          if (snapshot.exists()) {
            setLobby(snapshot.val());
          } else {
            setLobby(null); // Set lobby to null if it doesn't exist
          }
        } catch (error) {
          console.error('Error fetching lobby details:', error);
        }
      };

      fetchLobbyDetails();
    }
  }, [lobbyId]);

  useEffect(() => {
    if (lobby) {
      const playerList = lobby.players ? Object.values(lobby.players) : [];
      setPlayers(playerList);
    }
  }, [lobby]);

  const handlePlayPress = () => {
    // Navigation logic for Play button
  };

  const handleExitPress = async () => {
    try {
      if (userID) {
        await leaveLobby({ lobbyId, userId: userID });
        // Navigate to the home page after successfully leaving the lobby
        navigation.navigate('Home'); // Replace 'Home' with the correct screen name
      } else {
        Alert.alert("Error", "User is not authenticated.");
      }
    } catch (error) {
      console.error("Error leaving the lobby:", error);
      Alert.alert("Error", "Could not leave the lobby.");
    }
  };

  return (
    <View style={styles.container}>
      {lobby ? (
        <View>
          <Text style={styles.title}>Lobby Details</Text>
          <Text>Lobby Name: {lobby.name}</Text>
          <Text>Game Type: {lobby.gameType}</Text>
          {/* Add other lobby details here */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

      <Text style={styles.playerTitle}>Players</Text>
      
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <View style={styles.playerItem}>
            <Text>{item.name}</Text>
            <Text>{item.key}</Text>
            {/* Add other player details here */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Specify the type of 'id'
      />

      <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.exitButton} onPress={handleExitPress}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  playerItem: {
    marginBottom: 10,
  },
  playButton: {
    left: 0,
    right: 0,
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LobbyDetailsScreen;