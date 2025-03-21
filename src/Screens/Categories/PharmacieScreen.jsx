import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PharmacieScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PharmacieScreen</Text>
    </View>
  )
}

export default PharmacieScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf2f9',
  }
})