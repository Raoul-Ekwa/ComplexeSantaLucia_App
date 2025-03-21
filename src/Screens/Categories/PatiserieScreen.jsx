import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PatiserieScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PatiserieScreen</Text>
    </View>
  )
}

export default PatiserieScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf2f9',
  }
})