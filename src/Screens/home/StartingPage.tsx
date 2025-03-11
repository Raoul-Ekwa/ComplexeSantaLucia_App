import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import { Fonts } from '../../styles/fonts';

const StartingPage = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo_santaLucia.png')} style={[styles.logo, { width: width * 0.5, height: width * 0.5 }]} />

            <View style={{ marginTop: height * 0.05 }}>
                <Text style={[styles.title, { fontSize: width * 0.07 }]}>Welcome to</Text>
            </View>

            <TouchableOpacity
                style={[styles.button, { width: width * 0.8, height: height * 0.07 }]}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={[styles.buttonText, { fontSize: width * 0.045 }]}>Get started</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.createAccount}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: '#4E55AF', fontSize: width * 0.04, fontFamily: Fonts.Bold }}>Vous avez déjà un compte ?</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.large, // To add some spacing for smaller devices
    },
    logo: {
        resizeMode: 'contain',
        marginBottom: SIZES.large,
    },
    title: {
        //fontWeight: 'bold',
        marginBottom: SIZES.large,
        fontFamily: Fonts.Bold
    },
    button: {
        backgroundColor: '#02489B',
        marginTop: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        padding: 10,
        //fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: Fonts.Bold
    },
    createAccount: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
