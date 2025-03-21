import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FastFoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FastFoodScreen</Text>
    </View>
  )
}

export default FastFoodScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf2f9',
  }
})