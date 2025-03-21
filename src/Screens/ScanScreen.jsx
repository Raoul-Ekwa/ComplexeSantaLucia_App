import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Scan</Text>
    </View>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})