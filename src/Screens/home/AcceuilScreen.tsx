import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderApp from '../Home-header-page/HeaderApp'; // Assurez-vous que le chemin est correct

const AcceuilScreen = () => {
  return (
    <View style={styles.background}>
      <HeaderApp />
    </View>
  );
};

export default AcceuilScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
