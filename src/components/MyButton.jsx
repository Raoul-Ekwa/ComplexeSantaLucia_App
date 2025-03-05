import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../constants/theme'


interface Props {
    title: string;
} 
const MyButton : FC<Props>  = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container}  onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.blueButton,
      borderRadius: 10,
      height: 50,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,

    },
    titleText: {
        //fontFamily: "Redressed-Regular",
        color: 'white',
        fontSize: 16,
    },
  
})