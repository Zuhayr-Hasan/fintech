import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Input';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types/navigationType';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';  
import { useDispatch } from 'react-redux';
import { login, setToken } from '../redux/slices/authSlice'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { BASE_URL } from '../hooks/useFunds';
import axios from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    error: {
      email: false,
      password: false,
    },
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const { email, uid, password } = JSON.parse(userData);
          dispatch(login({ email, uid }));

          const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
          const jwtToken = response.data.access_token;
          dispatch(setToken(jwtToken));

          navigation.navigate('MutualFunds');
        }
      } catch (error) {
        console.error('Failed to load user data from AsyncStorage:', error);
      }
    };

    loadUserData();
  }, [dispatch, navigation]);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    if (email === '' || password === '') {
      setFormData((prevData) => ({
        ...prevData,
        error: {
          email: email === '',
          password: password === '',
        },
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      error: { email: false, password: false },
    }));

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await AsyncStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: email,
        password: password,
      }));

      const response = await axios.post("https://api.getharvest.app/auth/login", { email, password });
      const jwtToken = response.data.access_token;
      dispatch(login({ uid: user.uid, email }));
      dispatch(setToken(jwtToken));

      navigation.navigate('MutualFunds');
    } catch (error: any) {
      console.error('Firebase Authentication Error:', error.message);
    }
  };

  const { email, password, error } = formData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Input
          label="Email address"
          placeholder="Email address"
          value={email}
          onChangeText={(value: string) => handleInputChange('email', value)}
          keyboardType="email-address"
          error={error.email}
          errorMessage="Email is required"
          style={styles.input}
        />
        <Input
          label="Login pin"
          value={password}
          placeholder="Login Pin"
          onChangeText={(value: string) => handleInputChange('password', value)}
          secureTextEntry
          error={error.password}
          errorMessage="Pin is required"
          style={styles.input}
        />
        <View style={styles.forgotPinContainer}>
          <Text style={styles.forgotPinText}>Forgot pin? </Text>
          <TouchableOpacity>
            <Text style={styles.resetText}>reset</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: '#fff',
  },
  content: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1e21',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  forgotPinContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  forgotPinText: {
    color: '#888',
  },
  resetText: {
    color: '#0056ff',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#4a66f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#888',
  },
  signupLink: {
    color: '#0056ff',
  },
});
