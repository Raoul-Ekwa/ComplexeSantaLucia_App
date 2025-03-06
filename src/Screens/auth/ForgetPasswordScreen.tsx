import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../../styles/fonts';
import {COLORS, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native'; // Import de la navigation
import MyButton from '../../components/MyButton';

const ForgetPasswordScreen = () => {

  const [phone, setPhone] = useState()

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftReturn}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Forgot Password</Text>
      </View>

      <View style={styles.textCenter}>
        <Text style={[styles.text, styles.size]}>Continue using</Text>
        <Text style={[styles.text, styles.size]}>Phone Number</Text>
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
          keyboardType="phone-pad"
        />
      </View>

      <MyButton title="Send Verification Code" style={styles.button} onPress={() => navigation.navigate("VerificationCode")}/>
    </View>
  );
};

export default ForgetPasswordScreen;

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
});
