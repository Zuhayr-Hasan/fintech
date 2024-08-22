import { StyleProp, TextStyle } from 'react-native';

export interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

export interface ButtonProps {
  onPress: () => void;
  title: 'Login' | 'Signup' | 'Reset'; 
  backgroundColor?: string; 
}
