import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // Adjust the import path as needed

// Define the navigation prop based on the RootStackParamList
type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <StatusBar style="auto" />
      
      <Button
        title="Play bingo!"
        onPress={() => navigation.navigate('LobbyChoice')}
      />
      <Button
        title="About / Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
     alignItems: 'center',
     justifyContent: 'center',
  },
  welcomeText: {
     fontSize: 24,
     fontWeight: 'bold',
     textAlign: 'center',
     margin: 10,
  },
  button: {
     alignItems: 'center',
     backgroundColor: '#6C63FF',
     padding: 10,
     marginTop: 20,
     width: '80%',
     borderRadius: 5,
  },
  buttonText: {
     fontSize: 18,
     color: '#fff',
  },
 });

export default Home;