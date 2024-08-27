import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CustomTabBarButtonProps } from '../types/navigationType';
import Home from '../screens/Home';
import Funds from '../screens/Funds';
import Widhdraw from '../screens/Widhdraw';
import History from '../screens/History';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: CustomTabBarButtonProps) => (
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
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#7081FF' : '#748c94' }}>Home</Text>
          ),
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
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#7081FF' : '#748c94' }}>Funds</Text>
          ),
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
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#7081FF' : '#748c94' }}>History</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Withdraw"
        component={Widhdraw}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="arrow-down"
              size={30}
              color={focused ? '#7081FF' : '#748c94'}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#7081FF' : '#748c94' }}>Withdraw</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MutualFundsTabs;

const styles = StyleSheet.create({
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
    //  backgroundColor: 'red',
    marginBottom: 30,
  },
});
