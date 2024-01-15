// LobbyDetailsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, child, get } from 'firebase/database';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types/types'; // Adjust the import path as needed


const LobbyDetailsScreen: React.FC = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'LobbyDetails'>>(); // Use RouteProp with the specific screen name
    const lobbyId = route.params?.lobbyId;
  const [lobby, setLobby] = useState<any | null>(null);
  const [players, setPlayers] = useState<any[]>([]);

  // Fetch lobby details based on the lobbyId
  useEffect(() => {
    if (lobbyId) {
      const fetchLobbyDetails = async () => {
        try {
          const db = getDatabase();
          const lobbyRef = ref(db, `lobbies/${lobbyId}`);
          const snapshot = await get(child(lobbyRef, '/'));
          if (snapshot.exists()) {
            setLobby(snapshot.val());
          }
        } catch (error) {
          console.error('Error fetching lobby details:', error);
        }
      };

      fetchLobbyDetails();
    }
  }, [lobbyId]);

  // Fetch and display players when lobby details are available
  useEffect(() => {
    if (lobby) {
      const playerList = lobby.players ? Object.values(lobby.players) : [];
      setPlayers(playerList);
    }
  }, [lobby]);

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
            {/* Add other player details here */}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  playerItem: {
    marginBottom: 10,
  },
});

export default LobbyDetailsScreen;
