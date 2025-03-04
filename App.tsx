import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SignUpScreen from './src/Screens/auth/SignUpScreen';

const App = () => {
  return (
    <SafeAreaView >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="lightgreen" 
      />
      <SignUpScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
 
});
