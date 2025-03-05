import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Assurez-vous d'importer NavigationContainer
import StackNavigator from './src/navigation/StackNavigator'; // Importez votre StackNavigator

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="lightgreen" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f7f7f7',
  },
});

