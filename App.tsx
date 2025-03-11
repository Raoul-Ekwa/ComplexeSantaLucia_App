import React from 'react';
import { StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; // Assurez-vous d'importer NavigationContainer
import StackNavigator from './src/navigation/StackNavigator'; // Importez votre StackNavigator

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="lightgreen" />
      <NavigationContainer style={styles.container}>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});



