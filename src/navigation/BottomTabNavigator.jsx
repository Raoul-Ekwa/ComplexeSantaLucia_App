import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Home,
  Profile,
  Plus,
  Promotion,
  Scan,
  FidelityCard,
} from '../Screens/index'; //index.jsest le point d'entrée de notre dossier screens
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/index';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOrKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FidelityCard"
        component={FidelityCard}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'scan' : 'scan-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'gift' : 'gift-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'person' : 'person'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name={focused ? 'dots-three-horizontal' : 'dots-three-horizontal'}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
