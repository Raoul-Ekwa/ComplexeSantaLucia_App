import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SIZES, COLORS} from '../constants';
import {Fonts} from '../styles/fonts';
import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const categories = [
  {name: 'Mes achats', icon: 'shopping-cart', screen: 'Achat'},
  {name: 'Pâtiserie', icon: 'birthday-cake', screen: 'Patiserie'},
  {name: 'Fast Food', icon: 'shopping-basket', screen: 'FastFood'},
  {name: 'Hôtel', icon: 'hotel', screen: 'Hotel'},
  {name: 'Pharmacie', icon: 'plus-square', screen: 'Pharmacie'},
  {name: 'Numéro Utils', icon: 'phone', screen: 'NumeroUtil'},
  {name: 'Localisation', icon: 'map-marker', screen: 'Localisation'},
  {name: 'Contact', icon: 'address-book', screen: 'Contact'},
  {name: 'Aide', icon: 'question-circle', screen: 'Aide'},
];

export default function CategorieScreen() {
  const navigation = useNavigation(); // Utilisation du hook pour obtenir l'objet de navigation

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate(item.screen)} // Utilisation du nom de l'écran qui doit correspondre
    >
      <Icon
        name={item.icon}
        size={16}
        color={COLORS.gray}
        style={styles.icon}
      />
      <Text style={styles.itemTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: SIZES.medium, fontWeight: 'bold'}}>
          Catégories
        </Text>
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.scrollContentContainer}
      />

      <View style={styles.promotionTitle}>
        <Text style={{fontSize: SIZES.medium, fontWeight: 'bold'}}>
          Nos Bons Plans 
        </Text>
        <TouchableOpacity style={styles.voirPlus}>
          <Text>Voir plus</Text>
          <Ionicons name="arrow-forward" size={16} color={COLORS.gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  scrollContentContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  listItem: {
    backgroundColor: COLORS.lightWhite,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 9,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {top: 10, bottom: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 12,
    fontFamily: Fonts.Regular,
    fontWeight: 'bold',
    color: COLORS.black,
    textAlign: 'center',
  },
  promotionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  voirPlus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  
});
