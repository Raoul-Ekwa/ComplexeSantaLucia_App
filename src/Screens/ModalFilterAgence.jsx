import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';
import Ionicons from "react-native-vector-icons/Ionicons";

const ModalFilterAgence = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  // Remplacer l'API par une liste d'agences statiques
  useEffect(() => {
    const agences = [
      { id: '1', title: 'Agence 1' },
      { id: '2', title: 'Agence 2' },
      { id: '3', title: 'Agence 3' },
    ];

    setMasterDataSource(agences);
    setFilteredDataSource(agences);
  }, []);

  const searchFilterFunction = (text) => {
    // Vérifiez si le texte recherché n'est pas vide
    if (text) {
      // Le texte inséré n'est pas vide
      // Filtrez le masterDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1; // Compare le titre de l'agence
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Si le texte est vide, réinitialisez la liste
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => getItem(item)}>
        <Text style={styles.itemStyle}>
          {item.id}. {item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Fonction appelée lors du clic sur un élément
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Rechercher une agence"
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item) => item.id} // Assurez-vous que `id` est unique pour chaque élément
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  );
};

export default ModalFilterAgence;

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

