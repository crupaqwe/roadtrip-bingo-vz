import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types/types'; // Replace with your types path
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'; // Replace with your firebase config path

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn: React.FC = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleEmailLogin = () => {
    // Your login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        Alert.alert('Logged In', `Welcome ${userCredentials.user.email}`);
      })
      .catch((error) => {
        Alert.alert('Login failed', error.message);
      });
  };

  const handleGoogleLogin = () => {
    console.log('Google login logic goes here');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login logic goes here');
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('SignUp');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps='handled'
      >
        <Text style={styles.title}>Welcome Back</Text>
        
        <TextInput
          style={[styles.input, { marginBottom: isKeyboardVisible ? 10 : 20 }]}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { marginBottom: isKeyboardVisible ? 10 : 20 }]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={[styles.loginButton, { marginBottom: isKeyboardVisible ? 10 : 20 }]}
          onPress={handleEmailLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={[styles.socialButtonsContainer, { marginBottom: isKeyboardVisible ? 10 : 20 }]}>
          <FontAwesome.Button name="google" backgroundColor="#DB4437" onPress={handleGoogleLogin}>
            Google
          </FontAwesome.Button>
          <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={handleFacebookLogin}>
            Facebook
          </FontAwesome.Button>
        </View>

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
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
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
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  socialButtonText: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#6C63FF',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  loginButtonText: {
    color: '#fff', // White color for the text
    fontSize: 18,   // Font size can be adjusted as needed
    fontWeight: 'bold', // Bold font weight for better readability
    // If you're using a custom font, you can add the fontFamily property here
  },

  });

  export default SignIn;
