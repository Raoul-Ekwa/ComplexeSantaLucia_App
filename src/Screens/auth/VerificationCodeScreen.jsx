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
    
  } from 'react-native';
  import React, { useState } from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {Fonts} from '../../styles/fonts';
  import {COLORS, SHADOWS, SIZES} from '../../constants';
  import {useNavigation} from '@react-navigation/native'; // Import de la navigation
  import MyButton from '../../components/MyButton';
  import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

  const VerificationCode = () => {
  
    const [phone, setPhone] = useState()
    const [modalVisible, setModalVisible] = useState(false);
  
    const navigation = useNavigation();
    return (
      <SafeAreaProvider style={styles.container}>
        <View style={styles.leftReturn}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Ionicons name="arrow-back" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.text}>Forgot Password</Text>
        </View>
  
        <View style={styles.textCenter}>
          <Text style={[styles.text, styles.size]}>Enter OTP sent on</Text>
          <Text style={[styles.text, styles.size]}>Your phone.</Text>
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
        
        {/* Partie ou intervient notre modal */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                 <Ionicons name="close" size={20} color="black" />
              </TouchableOpacity>
              <View>
                 <Image source={require('../../assets/images/Cardena.png')}  style={styles.cardena}/>
              </View>
              <Text style={[styles.modalText, styles.modalTitle]}>Reset Password Success</Text>
              <Text style={[styles.modalText, styles.modalSubTitle]}>Loading e-commerce market</Text>
              <Pressable
                style={[styles.button001, styles.buttonClose]}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textStyle}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
         
        <Pressable
          style={[styles.button001, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>

        {/* <MyButton title="Submit" style={styles.button} /> */}
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
      width: "100%",
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
      backgroundColor:COLORS.blueButton,
    },
    buttonOpen: {
      marginVertical:50,
      backgroundColor: COLORS.blueButton,
      marginHorizontal:50,
      borderRadius:10
    },
    buttonClose: {
      backgroundColor: COLORS.blueButton,
      borderRadius:10,
      marginHorizontal:50,
      marginBottom: 40
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
      color: COLORS.black
    },
    modalSubTitle: {
      fontSize: SIZES.small,
      color: COLORS.gray2
    },
    cardena:{
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginVertical: 40,
      alignSelf: 'center',
    },
    closeButton:{
      position: 'absolute',
      top: -25,
      right: 20,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginRight: 10,
      marginBottom:20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      ...SHADOWS.medium
    }
  });
  