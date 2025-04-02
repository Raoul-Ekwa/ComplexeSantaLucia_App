import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker'; // Importation de la fonction pour ouvrir la galerie
import { useNavigation } from '@react-navigation/core';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants';
import ReturnButtonAndTitle from '../components/ReturnButtonAndTitle';

const PlusScreen = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(require('../assets/images/PourlaLoterieAmericaine.jpeg')); // Utilisation de useState pour gérer l'image

  // Fonction pour changer la photo
  const handleChangePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const selectedImage = response.assets[0].uri; // Obtenir l'uri de l'image sélectionnée
          setProfileImage({ uri: selectedImage }); // Mettre à jour l'image du profil
        }
      }
    );
  };

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReturnButtonAndTitle title={"Parametres"} />

        {/* Section Photo et Nom */}
        <View style={styles.photoAndNameContainer}>
          <Image source={profileImage} style={styles.photoAccount} />
          <TouchableOpacity style={styles.iconChangePhoto} onPress={handleChangePhoto}>
            <Ionicons name="camera-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: '500' }}>
            Boueng Ekwa Raoul
          </Text>
        </View>

        {/* Section Compte */}
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: '500', marginHorizontal: 15 }}>
            Compte
          </Text>
        </View>

        {/* Liste des options du compte */}
        <View style={styles.AccountContainer}>
          {/* Navigation vers l'écran "EditProfile" */}
          <TouchableOpacity
            style={styles.iconLine}
            onPress={() => {}}
          >
            <Feather name="user" size={24} />
            <Text style={styles.textItems}>Modifier le profil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <MaterialIcons name="security" size={24} />
            <Text style={styles.textItems}>Sécurité</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <MaterialIcons name="notifications-none" size={24} />
            <Text style={styles.textItems}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="lock" size={24} />
            <Text style={styles.textItems}>Confidentialité</Text>
          </TouchableOpacity>
        </View>

        {/* Section Assistance et à propos */}
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: '500', marginHorizontal: 15 }}>
            Assistance et à propos
          </Text>
        </View>

        {/* Liste des options d'assistance */}
        <View style={styles.AccountContainer}>
          <TouchableOpacity style={styles.iconLine}>
            <Feather name="credit-card" size={24} />
            <Text style={styles.textItems}>Mes abonnements</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="help-circle" size={24} />
            <Text style={styles.textItems}>Aide & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="alert-circle" size={24} />
            <Text style={styles.textItems}>Conditions et Politiques</Text>
          </TouchableOpacity>
        </View>

        {/* Section Actions */}
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 17, fontWeight: '500', marginHorizontal: 15 }}>
            Actions
          </Text>
        </View>

        {/* Liste des actions disponibles */}
        <View style={styles.AccountContainer}>
          <TouchableOpacity style={styles.iconLine}>
            <Feather name="flag" size={24} />
            <Text style={styles.textItems}>Signaler un problème</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <MaterialIcons name="supervisor-account" size={24} />
            <Text style={styles.textItems}>Ajouter un compte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconLine}>
            <Feather name="log-out" size={24} />
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
    padding: 20,
  },
  photoAccount: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 50,
    marginVertical: 1,
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  photoAndNameContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconChangePhoto: {
    position: 'relative',
    top: -25,
    right: -30,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  AccountContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  iconLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  textItems: {
    fontSize: 15,
    fontWeight: '400',
  },
});

