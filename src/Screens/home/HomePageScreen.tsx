import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomePageScreen</Text>
    </View>
  )
}

export default HomePageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})