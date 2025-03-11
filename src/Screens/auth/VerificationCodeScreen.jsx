// Importation des modules nécessaires depuis React Native et autres bibliothèques
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Alert,
  Modal,
  Image,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importation des icônes Ionicons
import { Fonts } from '../../styles/fonts'; // Importation des styles de police
import { COLORS, SHADOWS, SIZES } from '../../constants'; // Importation des constantes (couleurs, ombres, tailles)
import { useNavigation } from '@react-navigation/native'; // Importation de la navigation React Navigation
import MyButton from '../../components/MyButton'; // Importation d'un bouton personnalisé
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'; // Importation de SafeAreaProvider pour gérer les zones sécurisées
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'; // Importation pour le champ de code de confirmation (OTP)

// Définition de la constante du nombre de cellules pour le champ de code
const CELL_COUNT = 4;

const VerificationCode = () => {
  // Définition des états pour gérer les entrées utilisateur et la visibilité du modal
  const [phone, setPhone] = useState(); // État pour gérer le numéro de téléphone
  const [modalVisible, setModalVisible] = useState(false); // État pour afficher/masquer le modal

  const navigation = useNavigation(); // Utilisation du hook de navigation

  const [value, setValue] = React.useState(''); // État pour la valeur du code de vérification
  const [isFull, setIsFull] = React.useState(false); // État pour vérifier si le code est complet
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT, setIsFull }); // Référence pour gérer la validation du code
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue }); // Gestion du focus et effacement du code

  // Fonction pour gérer la soumission du code
  const handleFulfill = code => {
    if (code.length === CELL_COUNT) {
      setIsFull(true); // Si le code a la longueur nécessaire, marquer comme complet
    }
  };

  return (
    // Conteneur principal avec SafeAreaProvider pour gérer les zones sécurisées
    <SafeAreaProvider style={styles.container}>
      
      {/* Section avec un bouton retour */}
      <View style={styles.leftReturn}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Ionicons name="arrow-back" size={20} color="black" /> 
        </TouchableOpacity>
        <Text style={styles.text}>Forgot Password</Text> 
      </View>

      {/* Section centrale avec message d'entrée */}
      <View style={styles.textCenter}>

        <Text style={[styles.text, styles.size]}>Enter OTP sent on</Text> 
    
        <Text style={[styles.text, styles.size]}>Your phone.</Text> 
      </View>

      {/* Champ de code de confirmation (OTP) */}
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={code => {
          setValue(code); 
          handleFulfill(code); 
        }}
        cellCount={CELL_COUNT} 
        rootStyle={styles.codeFiledRoot} 
        keyboardType="number-pad" 
        textContentType="oneTimeCode" 
        renderCell={({ index, symbol, isFocused }) => (
         
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell, 
              isFull && styles.full, 
            ]}
            onLayout={getCellOnLayoutHandler(index)} 
          >
            {symbol || (isFocused ? <Cursor /> : null)} 
          </Text>
          
        )}
      />

      {/* Affichage du bouton "Submit" quand le code est complet */}
      {isFull && (
        <Pressable
          style={[styles.button001, styles.buttonOpen]} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Submit</Text> 
        </Pressable>
      )}

      {/* Modal pour indiquer la réussite du réinitialisation du mot de passe */}
      <Modal
        animationType="slide" 
        transparent={true} 
        visible={modalVisible} 
        onRequestClose={() => {
          Alert.alert('Modal has been closed.'); 
          setModalVisible(!modalVisible); 
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
         
            <TouchableOpacity
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)} 
            >
    
              <Ionicons name="close" size={20} color="black" /> 
            </TouchableOpacity>
            <View>
              <Image
                source={require('../../assets/images/Cardena.png')} 
                style={styles.cardena} 
              />
            </View>
            <Text style={[styles.modalText, styles.modalTitle]}>
              Reset Password Success
            </Text> 
            <Text style={[styles.modalText, styles.modalSubTitle]}>
              Loading e-commerce market
            </Text> 
            <Pressable
              style={[styles.button001, styles.buttonClose]} 
              onPress={() => navigation.navigate('Login')} 
            >
             
              <Text style={styles.textStyle}>Continue</Text> 
            </Pressable>
          </View>
        </View>
      </Modal>

    </SafeAreaProvider>
  );
};


export default VerificationCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  leftReturn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 50,
    marginHorizontal: 20,
    gap: 10,
  },
  text: {
    fontFamily: Fonts.Bold,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  size: {
    fontSize: SIZES.xLarge,
  },
  textCenter: {
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    marginLeft: 10,
    flex: 1,
    borderRadius: 5,
    padding: 0,
    color: COLORS.black,
    fontFamily: Fonts.Regular,
  },
  iconwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 40,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    //fontFamily: Fonts.Bold,
    marginHorizontal: 43,
    marginTop: 80,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    paddingVertical: 20,
    marginTop: 550,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button001: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: COLORS.blueButton,
  },
  buttonOpen: {
    marginVertical: 50,
    backgroundColor: COLORS.blueButton,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  buttonClose: {
    backgroundColor: COLORS.blueButton,
    borderRadius: 10,
    marginHorizontal: 50,
    marginBottom: 40,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: Fonts.Bold,
  },
  modalTitle: {
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  modalSubTitle: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
  },
  cardena: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 40,
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: -25,
    right: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    ...SHADOWS.medium,
  },
  codeFiledRoot: {
    marginTop: 50,
    marginHorizontal: 50,
    marginBottom: 50,
  },
  cell: {
    width: 50,
    height: 50,
    //lineHeight: 8,
    fontSize: 24,
    borderWidth: 2,
    borderColor: COLORS.black,
    textAlign: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  focusCell: {
    borderColor: '#000',
  },
  full: {
    borderColor: 'green',
  },
  fullMessage: {
    marginTop: 20,
    alignItems: 'center',
  },
});
