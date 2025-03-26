import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReturnButtonAndTitle from '../components/ReturnButtonAndTitle'
import { COLORS, SIZES, SHADOWS } from '../constants';
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ReturnButtonAndTitle title="Profile" />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.bgColor
  },
})