import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView, // Importation de ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Import du Picker
import MyButton from '../../components/MyButton';
import { useNavigation } from '@react-navigation/native'; // Import de la navigation
import { Fonts } from '../../styles/fonts';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false); // État de la case à cocher
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
  const [selectedCountry, setSelectedCountry] = useState(''); // État pour le pays sélectionné
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Fonction pour changer l'état de la checkbox
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // Fonction pour alterner l'affichage du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Fonction de soumission du formulaire
  const handleSubmit = () => {
    if (!name || !email || !phone || !selectedCountry) {
      Alert.alert('Validation Error', 'Please fill in all fields and select a country.');
      return;
    }
    if (!isChecked) {
      Alert.alert('Terms and Conditions', 'Please accept the terms and conditions.');
      return;
    }
    // Affichons les donnees saisies du formulaire dans la console 
    console.log('Form submitted', { name, email, phone, selectedCountry });
    
    // Appel de la fonction de navigation pour passer à la page suivante
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}> 
        <View style={styles.container}>
          <View>
            <Image
              source={require('../../assets/images/logo_santa_lucia.png')}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={styles.signUpwrapper}>
          <Text style={{ fontSize: SIZES.xLarge, fontFamily: Fonts.SemiBold }}>
            Create new
          </Text>
          <Text style={{ fontSize: SIZES.xLarge, fontFamily: Fonts.Medium }}>
            Account.
          </Text>

          <View style={styles.iconwrapper}>
            <Ionicons
              name="person"
              size={20}
              color={COLORS.primary}
              style={styles.icon}
            />
            <TextInput
              placeholder="Nom"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.iconwrapper}>
            <Ionicons
              name="mail"
              size={20}
              color={COLORS.primary}
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.iconwrapper}>
            <Ionicons
              name="call"
              size={20}
              color={COLORS.primary}
              style={styles.icon}
            />
            <TextInput
              placeholder="Telephone"
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* Picker pour la sélection du pays */}
          <View style={styles.iconwrapper}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={itemValue => setSelectedCountry(itemValue)}
              style={styles.input}
            >
              <Picker.Item label="Select Country" value="" />
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="Canada" value="CA" />
              <Picker.Item label="France" value="FR" />
              <Picker.Item label="Germany" value="DE" />
              <Picker.Item label="India" value="IN" />
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
              style={styles.eyeIconWrapper}
            >
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
                style={styles.checkboxWrapper}
              >
                <Ionicons
                  name={isChecked ? 'checkbox-outline' : 'checkbox'}
                  size={20}
                  color={isChecked ? COLORS.primary : COLORS.blue}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.bottomText}>
              <Text style={{ fontFamily: Fonts.Regular, color: COLORS.gray2, fontSize: SIZES.small }}>
                By registering you have accepted to use the{' '}
              </Text>
              <Text style={{ fontFamily: Fonts.Regular, color: '#00D2E0', fontSize: SIZES.small }}>
                terms
              </Text>
            </View>
          </View>
          <MyButton title="Create account" onPress={handleSubmit} />
        </View>

        <View style={styles.signInText}>
          <Text style={{ fontFamily: Fonts.Regular, color: COLORS.gray2, fontSize: SIZES.small }}>
            I already have an account.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontFamily: Fonts.Regular, color: COLORS.lightBlue, fontSize: SIZES.small }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    //flexGrow: 1, 
    justifyContent: 'center', 
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
  },
  signUpwrapper: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 25,
    marginVertical: SIZES.large,
    ...SHADOWS.small,
    marginHorizontal:20
  },
  input: {
    height: 50,
    marginLeft: 10,
    flex: 1,
    borderRadius: 5,
    padding: 15,
    color: COLORS.black,
    fontFamily: Fonts.Regular,
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
  signInText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 45,
  },
});











