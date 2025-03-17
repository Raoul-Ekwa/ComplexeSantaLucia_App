import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FidelityCard = () => {
  return (
    <View style={styles.container}>
      <Text>FidelityCard</Text>
    </View>
  )
}

export default FidelityCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})