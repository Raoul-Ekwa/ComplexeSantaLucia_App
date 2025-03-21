import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LocalisationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LocalisationScreen</Text>
    </View>
  )
}

export default LocalisationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf2f9',
  }
})