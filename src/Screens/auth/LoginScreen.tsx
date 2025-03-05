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
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SHADOWS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native'; // Import de la navigation

const LoginScreen = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Fonction pour alterner l'affichage du mot de passe
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Fonction de soumission du formulaire
  const handleSubmit = () => {
    if (!name || !phone) {
      Alert.alert(
        'Validation Error',
        'Please fill in all fields and select a country.',
      );
      return;
    }

    // Affichons les donnees saisies du formulaire dans la console
    console.log('Form submitted', {name, phone});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
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
          Sign in
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: SIZES.xLarge}}>
          to continue.
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
            <Text style={{color: '#00D2E0', fontSize: SIZES.small}}>
              Forget Password
            </Text>
          </View>
        </View>
        <MyButton title="Log in" onPress={handleSubmit} style={styles.button}/>
      </View>

      <View style={styles.signInText}>
        <Text style={{color: COLORS.gray2, fontSize: SIZES.small}}>
          Don't have an account.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: COLORS.lightBlue, fontSize: SIZES.small}}>
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    color: COLORS.blue,
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
    marginTop: 10,
    position: 'absolute',
    right: -40,
    bottom: -10
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
  button: {
    marginTop: 40,
  },
  
});
