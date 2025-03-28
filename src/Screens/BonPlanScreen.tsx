import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReturnButtonAndTitle from '../components/ReturnButtonAndTitle';

const BonPlanScreen = () => {
  return (
    <View style={styles.container}>
      <ReturnButtonAndTitle title="Bons Plans" />
    </View>
  );
};

export default BonPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2f9',
    padding: 20,
  },
});
