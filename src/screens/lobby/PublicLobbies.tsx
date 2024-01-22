// PublicLobbiesScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // Adjust the import path as needed
import { getPublicLobbies } from '../../utils/services/getPublicLobbies'; // Import your getPublicLobbies function

// Define the navigation prop based on the RootStackParamList
type PublicLobbiesNavigationProp = StackNavigationProp<RootStackParamList>;

const PublicLobbiesScreen: React.FC = () => {
  const navigation = useNavigation<PublicLobbiesNavigationProp>();
  const [publicLobbies, setPublicLobbies] = useState<any[]>([]); // Use 'any' for objects without a specific type

  useEffect(() => {
    // Fetch the list of public lobbies when the component mounts
    const fetchPublicLobbies = async () => {
      try {
        const publicLobbiesData = await getPublicLobbies();
        setPublicLobbies(publicLobbiesData);
      } catch (error) {
        console.error("Failed to fetch public lobbies:", error);
      }
    };

    fetchPublicLobbies();
  }, []);

  // Render a single lobby item
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.lobbyItem}
      onPress={() => navigation.navigate('LobbyDetails', { lobbyId: item.id })}
    >
      <Text style={styles.lobbyName}>{item.name}</Text>
      <Text>Max Players: {item.maxPlayers}</Text>
      <Text>Visibility: {item.visibility}</Text>
      {/* Add any other lobby properties you want to display */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Public Lobbies</Text>
      <FlatList
        data={publicLobbies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lobbyItem: {
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  lobbyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PublicLobbiesScreen;
