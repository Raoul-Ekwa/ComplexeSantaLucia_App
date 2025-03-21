import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumeroUtilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NumeroUtilScreen</Text>
    </View>
  )
}

export default NumeroUtilScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf2f9',
  }
})