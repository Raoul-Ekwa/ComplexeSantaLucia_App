import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HotelScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HotelScreen</Text>
    </View>
  )
}

export default HotelScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf2f9',
  }
})