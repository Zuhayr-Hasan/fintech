import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import MutualFundsTabs from './MutualFundsTabs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen 
            name="MutualFunds" 
            component={MutualFundsTabs}
            options={{
              title: "Mutual Funds",
              headerStyle: styles.headerStyle,
              headerTitleStyle: styles.headerTitleStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    height: 85, 
    elevation: 10, 
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold', 
    paddingBottom: 10,
  },
  customButton: {
    top: -25, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#7081FF',
    marginBottom: 30,
  },
  headerStyle: {
    backgroundColor: '#fff', 
    height: 80, 
    paddingVertical: 10, 
  },
  headerTitleStyle: {
    fontSize: 20, 
  },
});
