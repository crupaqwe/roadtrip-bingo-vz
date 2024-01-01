import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { joinLobby } from '../utils/services/joinLobby'; // Adjust the import path as necessary
import { listPublicLobbies } from '../utils/services/listPublicLobbies'; // Adjust the import path as necessary
import { RootStackParamList } from '../utils/types/types'; // Adjust the import path as needed

type JoinLobbyScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'JoinLobbyScreen'>;
};

const JoinLobbyScreen: React.FC<JoinLobbyScreenProps> = ({ navigation }) => {
  const [lobbies, setLobbies] = useState([]); // Type this based on your lobby object structure
  const [privateLobbyCode, setPrivateLobbyCode] = useState('');

//   useEffect(() => {
//     const fetchLobbies = async () => {
//       const availableLobbies = await listPublicLobbies();
//       setLobbies(availableLobbies);
//     };

//     fetchLobbies();
//   }, []);

//   const handleJoinLobby = async (lobbyId: string) => {
//     try {
//       await joinLobby(lobbyId);
//       // Navigate to the lobby or show confirmation
//     } catch (error) {
//       // Handle errors, such as displaying an alert
//     }
//   };

//   const handleJoinPrivateLobby = async () => {
//     try {
//       await joinLobby(privateLobbyCode);
//       // Navigate to the lobby or show confirmation
//     } catch (error) {
//       // Handle errors, such as displaying an alert
//     }
//   };

  return (
    <View style={styles.container}>
      {/* ... rest of your component */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff', // or any color suitable for your app theme
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 15,
      width: '100%',
      borderRadius: 5,
    },
    // ... rest of your styles
  });
  

export default JoinLobbyScreen;




// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import { listPublicLobbies, joinLobby } from '../utils/services/lobbyService'; // Adjust the import path as necessary

// const JoinLobbyScreen = ({ navigation }) => {
//   const [lobbies, setLobbies] = useState([]); // State to hold the list of public lobbies
//   const [privateLobbyCode, setPrivateLobbyCode] = useState(''); // State to hold the private lobby code input

//   useEffect(() => {
//     // Fetch and listen to the list of public lobbies
//     const fetchLobbies = async () => {
//       const availableLobbies = await listPublicLobbies();
//       setLobbies(availableLobbies);
//     };

//     fetchLobbies();
//   }, []);

//   const handleJoinLobby = (lobbyId) => {
//     // Implement functionality to join the selected lobby
//     // You would call joinLobby from your lobbyService with the lobbyId and user details
//   };

//   const handleJoinPrivateLobby = () => {
//     // Implement functionality to join a private lobby using the privateLobbyCode
//     // This would likely also involve a call to joinLobby with the lobby code
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Join a Lobby</Text>

//       <FlatList
//         data={lobbies}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.lobbyItem}
//             onPress={() => handleJoinLobby(item.id)}
//           >
//             <Text style={styles.lobbyName}>{item.name}</Text>
//             <Text>{item.players.length}/{item.maxPlayers}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter private lobby code"
//         value={privateLobbyCode}
//         onChangeText={setPrivateLobbyCode}
//       />
//       <Button
//         title="Join Private Lobby"
//         onPress={handleJoinPrivateLobby}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   lobbyItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   lobbyName: {
//     fontSize: 18,
//   },
//   // ... additional styles
// });

// export default JoinLobbyScreen;
