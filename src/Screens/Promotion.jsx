import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Promotion = () => {
  return (
    <View style={styles.container}>
      <Text>Promotion</Text>
    </View>
  )
}

export default Promotion

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
})