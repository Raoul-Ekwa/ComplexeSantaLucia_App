// Importation des composants nécessaires de React Native et des bibliothèques tierces
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core'; // Pour gérer la navigation
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../constants/Colors';
import {S, VS, MS} from '../../styles/Responsive';

// Définition du composant PlusScreen
const PlusScreen = () => {
  const navigation = useNavigation(); // Utilisation de useNavigation pour gérer la navigation dans l'app

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Section Header avec le bouton de retour */}
        <View style={styles.headerLeftContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconButton}>
              <View style={styles.iconHeaderLeft}>
                <Feather name="arrow-left" size={24} />
              </View>
            </TouchableOpacity>
            <Text style={styles.headerText}>Parametres</Text>
          </View>
        </View>

        {/* Section Photo et Nom */}
        <View style={styles.photoAndNameContainer}>
          <Image
            source={require('../../assets/images/PourlaLoterieAmericaine.jpeg')}
            style={styles.photoAccount} // Style appliqué à l'image
          />
          <Text style={{fontSize: 17, fontWeight: '500'}}>
            Boueng Ekwa Raoul
          </Text>
        </View>

        {/* Section Compte */}
        <View style={{padding: 10}}>
          <Text style={{fontSize: 17, fontWeight: '500', marginHorizontal: 15}}>
            Compte
          </Text>
        </View>

        {/* Liste des options du compte */}
        <View style={styles.AccountContainer}>
          {/* Navigation vers l'écran "EditProfile" */}
          <TouchableOpacity
            style={styles.iconLine}
            onPress={() => navigation.navigate('EditProfile')}>
            <Feather name="user" size={30} />
            <Text style={styles.textItems}>Modifier le profil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <MaterialIcons name="security" size={30} />
            <Text style={styles.textItems}>Securité</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <MaterialIcons name="notifications-none" size={30} />
            <Text style={styles.textItems}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="lock" size={30} />
            <Text style={styles.textItems}>Confidentialité</Text>
          </TouchableOpacity>
        </View>

        {/* Section Assistance et à propos */}
        <View style={{padding: 15}}>
          <Text style={{fontSize: 17, fontWeight: '500', marginHorizontal: 15}}>
            Assistance et à propos
          </Text>
        </View>

        {/* Liste des options d'assistance */}
        <View style={styles.AccountContainer}>
          <TouchableOpacity style={styles.iconLine}>
            <Feather name="credit-card" size={30} />
            <Text style={styles.textItems}>Mes abonnements</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="help-circle" size={30} />
            <Text style={styles.textItems}>Aide & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="alert-circle" size={30} />
            <Text style={styles.textItems}>Conditions et Politiques</Text>
          </TouchableOpacity>
        </View>

        {/* Section Actions */}
        <View style={{padding: 15}}>
          <Text style={{fontSize: 17, fontWeight: '500', marginHorizontal: 15}}>
            Actions
          </Text>
        </View>

        {/* Liste des actions disponibles */}
        <View style={styles.AccountContainer}>
          <TouchableOpacity style={styles.iconLine}>
            <Feather name="flag" size={30} />
            <Text style={styles.textItems}>Signaler un problème</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <MaterialIcons name="supervisor-account" size={30} />
            <Text style={styles.textItems}>Ajouter un compte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="log-out" size={30} />
            <Text style={styles.textItems}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlusScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#faf2f9',
  },
  headerLeftContainer: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    marginTop: 20,
  },
  iconHeaderLeft: {
    padding: S(10),
    borderRadius: S(50),
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  photoAccount: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
    marginVertical: 1,
    alignSelf: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  photoAndNameContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
  },
  AccountContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  iconLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  textItems: {
    fontSize: 15,
    fontWeight: '400',
  },
});
