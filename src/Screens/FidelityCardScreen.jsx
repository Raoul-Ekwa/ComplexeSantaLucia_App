import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReturnButtonAndTitle from '../components/ReturnButtonAndTitle'
import { COLORS, SIZES, SHADOWS } from '../constants';
const FidelityCard = () => {
  return (
    <View style={styles.container}>
      <ReturnButtonAndTitle title="Carte de fidélité" />
    </View>
  )
}

export default FidelityCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.bgColor
  },
})