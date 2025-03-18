
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/auth/LoginScreen';
import SignUpScreen from '../Screens/auth/SignUpScreen';
import ForgetPasswordScreen from '../Screens/auth/ForgetPasswordScreen';
import VerificationCodeScreen from '../Screens/auth/VerificationCodeScreen';
import StartingPage from '../Screens/home/StartingPage';
import BottomTabNavigator from './BottomTabNavigator';

const StackNavigator = () => {
  // Création du stack navigator
  const Stack = createNativeStackNavigator();

  return (
    // Le Navigateur de stack est utilisé pour la gestion des écrans sous forme de pile
    <Stack.Navigator
      initialRouteName="StartingPage" // L'écran initial (le premier écran à afficher lors du lancement)
      screenOptions={{ headerShown: false }} // Désactivation de l'en-tête (header) pour toutes les pages dans la pile
    >
      {/* Définition des différentes routes dans la pile de navigation */}
      
      <Stack.Screen name="StartingPage" component={StartingPage} />

      <Stack.Screen name="SignUp" component={SignUpScreen} />

      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />

      <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />

      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;

