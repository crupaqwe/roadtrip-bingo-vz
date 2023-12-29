import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.brandContainer}>
        {/* Replace with your brand's logo */}
        <Image source={require('./assets/icon.png')} style={styles.logo} />
        <Text style={styles.brandName}>Velna Zoss</Text>
      </View>

      <Text style={styles.appName}>bingogogo!</Text>

      {/* Sign-in options */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log In with Username</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log In with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log In with Apple ID</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log In with Play Store</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Log In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpButton} onPress={() => {}}>
        <Text style={styles.helpButtonText}>Need Help?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    // Adjust the size according to your logo
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  helpButton: {
    position: 'absolute',
    bottom: 20,
  },
  helpButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
});
