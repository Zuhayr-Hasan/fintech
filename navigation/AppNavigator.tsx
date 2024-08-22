import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Funds from '../screens/Funds';
import Widhdraw from '../screens/Widhdraw';
import History from '../screens/History';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}
  >
    <View style={styles.customButtonContainer}>
      {children}
    </View>
  </TouchableOpacity>
);

function MutualFundsTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={30}
              color={focused ? '#7081FF' : '#748c94'}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Funds"
        component={Funds}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="wallet"
              size={30}
              color={focused ? '#7081FF' : '#748c94'}
            />
          ),
          tabBarLabel: 'Funds',
        }}
      />
      <Tab.Screen
        name="Add"
        component={Funds} 
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="plus"
              size={20}
              color={focused ? '#ffffff' : '#ffffff'}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="history"
              size={30}
              color={focused ? '#7081FF' : '#748c94'}
            />
          ),
          tabBarLabel: 'History',
        }}
      />
      <Tab.Screen
        name="Widhdraw"
        component={Widhdraw}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="arrow-down"
              size={30}
              color={focused ? '#7081FF' : '#748c94'}
            />
          ),
          tabBarLabel: 'Withdraw',
        }}
      />
    </Tab.Navigator>
  );
}

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
    marginTop: 10
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
