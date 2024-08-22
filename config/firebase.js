import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC2m16dfwL0TDNNOVNUz7QOAK_F9y_GFCk',
  authDomain: 'fintech-55e27.firebaseapp.com',
  projectId: 'fintech-55e27',
  storageBucket: 'fintech-55e27.appspot.com',
  messagingSenderId: '1026161818531',
  appId: '1:1026161818531:web:326934115bff2ee3e87816',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
