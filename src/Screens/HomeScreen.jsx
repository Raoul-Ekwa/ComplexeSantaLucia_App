import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, SHADOWS} from '../constants';
import SearchBar from '../components/Home/SearchBar';
import Carrousel from '../components/Carrousel';
import CategorieScreen from './CategorieScreen';
import BonPlanFetchApi from './home/BonPlanFetchApi';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Image
            source={require('../assets/images/PourlaLoterieAmericaine.jpeg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/logo_santa_lucia.png')}
            style={styles.logo}
          />

          <View
            style={{
              alignItems: 'flex-end',
              backgroundColor: COLORS.lightWhite,
              borderRadius: 30,
              padding: 10,
            }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={30}
                color={COLORS.gray}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Notre barre de recherche de la Home Page*/}
        <SearchBar />

        <ScrollView>
          {/* Notre Carousel de la Home Page*/}
          <Carrousel />

          {/* Notre Categorie de la Home Page*/}
          <CategorieScreen />

          {/* Recuperation des donnees API des bons plans */}
          <BonPlanFetchApi />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.appBgColor,
    flex: 1,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.large + 5,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontWeight: 'semibold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    top: 6,
    right: 2,
  },
  cartNumber: {
    fontFamily: 'regular',
    color: COLORS.lightWhite,
    fontWeight: '600',
    fontSize: 10,
  },
  logo: {
    width: 190,
    height: 50,
    resizeMode: 'contain',
  },
  notification: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 30,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.small,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 30,
    ...SHADOWS.medium,
  },
});
