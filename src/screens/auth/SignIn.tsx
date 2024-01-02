import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure you've installed this package
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // adjust the path to your actual types.ts file

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn: React.FC = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = () => {
    // Implement email login logic
    console.log('Email login', email, password);
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log('Google login');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic
    console.log('Facebook login');
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('SignUp'); // Use the correct route name for your sign-up screen
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword'); // Use the correct route name for your forgot password screen
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleEmailLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Icon.Button
          name="google"
          backgroundColor="#DB4437"
          onPress={handleGoogleLogin}
          style={styles.buttonIcon}
        >
          Login with Google
        </Icon.Button>

        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={handleFacebookLogin}
          style={styles.buttonIcon}
        >
          Login with Facebook
        </Icon.Button>

        <TouchableOpacity onPress={handleCreateAccountPress}>
          <Text style={styles.linkText}>Create account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonIcon: {
    width: '80%',
    paddingVertical: 10,
    marginBottom: 15,
  },
  linkText: {
    color: '#6C63FF',
    fontSize: 16,
    marginTop: 15,
  },
  // Add any additional styles you need here
});

export default SignIn;
