import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have installed react-native-vector-icons

const WelcomeScreen = () => {
  // Add your state and functions for handling input and button presses here

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>LOGIN</Text>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Icon.Button name="google" style={styles.socialButton} backgroundColor="#DB4437">
        Login
      </Icon.Button>
      <Icon.Button name="facebook" style={styles.socialButton} backgroundColor="#3b5998">
        Login
      </Icon.Button>

      <TouchableOpacity>
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Assuming a dark theme from the image
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25, // Adjust for roundness
    fontSize: 16,
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#28a745', // Adjust the color to match your theme
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  socialButton: {
    width: '80%',
    marginBottom: 10,
    borderRadius: 25,
  },
  createAccountText: {
    fontSize: 16,
    color: '#6C63FF',
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#f39c12',
    marginTop: 15,
  },
  // Add any additional styles you need here
});

export default WelcomeScreen;
