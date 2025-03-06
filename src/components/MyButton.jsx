
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

import { COLORS } from '../constants/theme'
import { Fonts } from '../styles/fonts';

const MyButton = ({ title, style, onPress }) => {

  return (
    <TouchableOpacity style={[styles.defaultButtonStyle, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    marginTop: 20,
    backgroundColor: COLORS.blueButton,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
  },
});

export default MyButton;
