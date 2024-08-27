// navigation/types.ts
import { StackNavigationProp } from '@react-navigation/stack';
import { GestureResponderEvent } from 'react-native';

export interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

type RootStackParamList = {
  Login: undefined;
  MutualFunds: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
