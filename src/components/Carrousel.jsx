import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../constants';

const Carrousel = () => {
  const slides = [
    "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
          height: 200, // Assurez-vous que les images ont une hauteur définie
        }}
        autoplay
        circleLoop
        onError={(error) => console.log('Error loading image:', error)} // Gestion des erreurs
      />
    </View>
  );
};

export default Carrousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,  // Réduit la marge top pour tester la visibilité
    marginBottom: 10,
    justifyContent: 'center', // Centrer le carousel verticalement
  }
});
