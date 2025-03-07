
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/auth/LoginScreen';
import SignUpScreen from '../Screens/auth/SignUpScreen';
import ForgetPasswordScreen from '../Screens/auth/ForgetPasswordScreen';
import VerificationCodeScreen from '../Screens/auth/VerificationCodeScreen';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
 
      <Stack.Navigator
        initialRouteName="SignUp" // Définir l'écran de connexion comme écran initial
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
      </Stack.Navigator>
  
  );
};

export default StackNavigator;

