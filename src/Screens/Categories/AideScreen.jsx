import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AideScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AideScreen</Text>
    </View>
  )
}

export default AideScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf2f9',
      }
})