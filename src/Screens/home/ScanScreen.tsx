import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../constants/Colors';
import {S, VS, MS} from '../../styles/Responsive';

const Scanner = () => {
  const navigation = useNavigation();

  const ScanQR = () => {
    navigation.navigate('Scanner'); // Navigue vers Scanner
  };

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.headerLeftContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconButton}>
            <View style={styles.iconHeaderLeft}>
              <Feather name="arrow-left" size={24} />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>My QR Code</Text>
        </View>
      </View>

      <Image
        source={require('../../assets/images/PourlaLoterieAmericaine.jpeg')}
        style={styles.imageProfil}
      />

      <View style={styles.userName}>
        <Text>Boueng Ekwa raoul</Text>
        <MaterialIcons name="verified" size={24} color="blue" />
      </View>

      <View style={styles.codeBar}>
        <MaterialIcons name="qr-code-scanner" size={300} color="black" />
      </View>

      <TouchableOpacity style={styles.ScanQRCode} onPress={ScanQR}>
        <MaterialIcons name="photo-camera" size={24} color="black" />
        <Text>Scanner QR Code</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  headerLeftContainer: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
  },
  iconButton: {},
  iconHeaderLeft: {
    padding: S(10),
    borderRadius: S(50),
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  imageProfil: {
    width: 90,
    height: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    backgroundColor: 'white', // Ajoutez une couleur de fond pour l'image
    borderRadius: 40,
  },
  userName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
  codeBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    marginHorizontal: 60,
    borderRadius: 30,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 5,
    //elevation: 0,
  },
  ScanQRCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: 'white',
    marginHorizontal: 60,
    borderRadius: 30,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 5,
    elevation: 3,
    gap: 10,
    alignItems: 'center',
  },
});
