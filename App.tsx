import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';

// Création du stack navigator en utilisant 'createNativeStackNavigator'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Le NavigationContainer est nécessaire pour gérer la navigation dans l'application
    <NavigationContainer>
      
      {/* Stack.Navigator est utilisé pour définir la pile de navigation avec les écrans à afficher */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* Définition du premier écran, "Stack", qui utilise le StackNavigator comme composant */}
        <Stack.Screen name="Stack" component={StackNavigator} />

        {/* Définition du deuxième écran, "Bottom Navigator", avec le BottomTabNavigator comme composant */}
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false, // Pas d'en-tête pour cet écran
          }}
        />
      </Stack.Navigator>

      {/* Le StatusBar est utilisé pour gérer l'apparence de la barre d'état en haut de l'écran */}
      <StatusBar
        barStyle="dark-content" // Change la couleur du texte de la barre d'état (claire ou foncée)
        backgroundColor="#6200EE" // Change la couleur de fond de la barre d'état
        translucent={false} // Rend la barre d'état opaque, la rendant non transparente
      />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'regular',
    fontSize: 20,
  },
});