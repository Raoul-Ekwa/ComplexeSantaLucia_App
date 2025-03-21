import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlusScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Plus</Text>
    </View>
  )
}

export default PlusScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})