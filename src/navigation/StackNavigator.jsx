import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/auth/LoginScreen';
import SignUpScreen from '../Screens/auth/SignUpScreen';
import ForgetPasswordScreen from '../Screens/auth/ForgetPasswordScreen';
import VerificationCodeScreen from '../Screens/auth/VerificationCodeScreen';
import StartingPage from '../Screens/home/StartingPage';
import BottomTabNavigator from './BottomTabNavigator';

import AchatScreen from '../Screens/Categories/AchatScreen';

import AideScreen from '../Screens/Categories/AideScreen';

import ContactScreen from '../Screens/Categories/ContactScreen';

import PatiserieScreen from '../Screens/Categories/PatiserieScreen';

import FastFoodScreen from '../Screens/Categories/FastFoodScreen';

import HotelScreen from '../Screens/Categories/HotelScreen';

import PharmacieScreen from '../Screens/Categories/PharmacieScreen';

import LocalisationScreen from '../Screens/Categories/LocalisationScreen';

import NumeroUtilScreen from '../Screens/Categories/NumeroUtilScreen';

import ModalFilterAgence from '../Screens/ModalFilterAgence';

import BonPlanScreen from '../Screens/BonPlanScreen';

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

      {/* Définition des autres routes dans la pile de navigation des categories */}
      <Stack.Screen name="Achat" component={AchatScreen} />
      <Stack.Screen name="Aide" component={AideScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="FastFood" component={FastFoodScreen} />
      <Stack.Screen name="Hotel" component={HotelScreen} />
      <Stack.Screen name="Localisation" component={LocalisationScreen} />
      <Stack.Screen name="NumeroUtil" component={NumeroUtilScreen} />
      <Stack.Screen name="Patiserie" component={PatiserieScreen} />
      <Stack.Screen name="Pharmacie" component={PharmacieScreen} />

      {/* Modal pour filtrer les categories par agences */}
      <Stack.Screen name="ModalFilterAgence" component={ModalFilterAgence} />

      <Stack.Screen name="BonPlan" component={BonPlanScreen} />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;


