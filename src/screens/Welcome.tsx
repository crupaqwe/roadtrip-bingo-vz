import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to install this package

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Enter your email and password below to log in.</Text>

        <View style={styles.socialLogin}>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            Facebook
          </Icon.Button>
          <Icon.Button name="twitter" backgroundColor="#1DA1F2">
            Twitter
          </Icon.Button>
          <Icon.Button name="google" backgroundColor="#DB4437">
            Google
          </Icon.Button>
        </View>

        <Text style={styles.or}>or</Text>

        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#e7e7e7',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#6C63FF',
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
