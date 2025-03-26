import {StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import ReturnButtonAndTitle from '../components/ReturnButtonAndTitle';
import {COLORS, SIZES, SHADOWS} from '../constants';
import SearchBar from '../components/Home/SearchBar';
import ModalFilterAgence from './ModalFilterAgence';
const PromotionScreen = () => {

  return (
      <View style={styles.container}>
        {/* Composant pour retourner a la home page */}
        <ReturnButtonAndTitle title="Promotions" />

        {/* La barre de recherche sans l'icone de scan et avec l'icone de filtre*/}
        <SearchBar showScanIcon={false} addIconOfOurChoise={true} />
      </View>
  );
};

export default PromotionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.bgColor,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
