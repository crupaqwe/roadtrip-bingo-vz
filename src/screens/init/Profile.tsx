// ProfileScreen.tsx
import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../utils/types/types"; // Adjust the path to your types.ts file

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

const Profile: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  // Mock logout function
  const handleLogout = () => {
    // Your actual logout logic here
    console.log("User logged out");
    navigation.replace("Home"); // Replace with your login screen's route name
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Profile</Text>

      <View style={styles.userInfoSection}>
        <Text style={styles.name}>Jānis Dombrovskis (crupaqwe)</Text>
        {/* Additional user info could go here */}
      </View>

      <Text style={styles.description}>
        RoadTrip Bingo is an interactive mobile app created by Jānis
        Dombrovskis, designed to bring an extra layer of fun to road trips.
        Users can create or join lobbies, participate in road trip-specific
        bingo games, and share their experiences with friends. Whether you're
        spotting landmarks or discovering local hidden gems, this app makes
        every journey an adventure.
      </Text>

      <Button title="Log Out" onPress={handleLogout} color="#d9534f" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: "#1e90ff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  userInfoSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    marginBottom: 20,
  },
});

export default Profile;
