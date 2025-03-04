import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker'; // Import du Picker

const SignUpScreen = () => {
  const [isChecked, setIsChecked] = useState(false); // État de la case à cocher
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
  const [selectedCountry, setSelectedCountry] = useState(''); // État pour le pays sélectionné

  // Fonction pour changer l'état de la checkbox
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // Fonction pour alterner l'affichage du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/images/logo_santa_lucia.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.signUpwrapper}>
        <Text style={{fontWeight: 'bold', fontSize: SIZES.xLarge}}>
          Create new
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: SIZES.xLarge}}>
          Account.
        </Text>

        <View style={styles.iconwrapper}>
          <Ionicons
            name="person"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
          <TextInput placeholder="Nom" style={styles.input} />
        </View>

        <View style={styles.iconwrapper}>
          <Ionicons
            name="mail"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        <View style={styles.iconwrapper}>
          <Ionicons
            name="call"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
          <TextInput placeholder="Telephone" style={styles.input} />
        </View>

        {/* Picker pour la sélection du pays */}
        <View style={styles.iconwrapper}>
          <Ionicons
            name="flag"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
          <Picker
            selectedValue={selectedCountry}
            onValueChange={itemValue => setSelectedCountry(itemValue)}
            style={styles.input}>
            <Picker.Item label="Select Country" value="" />
            <Picker.Item label="United States" value="US" />
            <Picker.Item label="Canada" value="CA" />
            <Picker.Item label="France" value="FR" />
            <Picker.Item label="Germany" value="DE" />
            <Picker.Item label="India" value="IN" />
            {/* Ajoutez plus de pays ici */}
          </Picker>
        </View>

        {/* Input pour le mot de passe avec icône pour masquer/afficher */}
        <View style={styles.iconwrapper}>
          <Ionicons
            name="lock-closed"
            size={20}
            color={COLORS.primary}
            style={styles.icon}
          />
          <TextInput
            placeholder="Mot de passe"
            style={styles.input}
            secureTextEntry={!showPassword} // Change selon l'état showPassword
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIconWrapper}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>

        {/* Section pour les termes et conditions avec la checkbox */}
        <View style={styles.bottomTextContainer}>
          <View style={styles.bottomText}>
            <TouchableOpacity
              onPress={toggleCheckbox}
              style={styles.checkboxWrapper}>
              <Ionicons
                name={isChecked ? 'checkbox-outline' : 'checkbox'} // Changez l'icône selon l'état
                size={20}
                color={isChecked ? COLORS.primary : '#4E55AF'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomText}>
            <Text style={{color: COLORS.gray, fontSize: SIZES.small}}>
              By registering you have accepted to use the{' '}
            </Text>
            <Text style={{color: '#00D2E0', fontSize: SIZES.small}}>terms</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  signUpwrapper: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 25,
    marginVertical: 20,
    ...SHADOWS.small,
    marginHorizontal: SIZES.xLarge,
  },
  input: {
    height: 50,
    marginLeft: 10,
    flex: 1,
    borderRadius: 5,
    padding: 15,
  },
  iconwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLORS.secondary,
  },
  icon: {
    marginRight: 10,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 45,
  },
  bottomText: {
    marginTop: 20,
    marginHorizontal: SIZES.xLarge - 18,
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 10,
  },
});
