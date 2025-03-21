import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

const Carrousel = () => {
  const images = [
    require('../assets/images/slider_1.jpg'),
    require('../assets/images/slider_2.jpg'),
    require('../assets/images/slider_3.jpg'),
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} />
      </View>
    );
  };

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Défilement toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle quand le composant est démonté
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 50} // Ajustez l'espacement de l'élément
        loop={true}
        autoplay={true}
        autoplayInterval={3000} // Défilement automatique toutes les 3 secondes
        onSnapToItem={index => setActiveIndex(index)} // Mise à jour de l'index actif
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        dotContainerStyle={styles.dotContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
    borderRadius: 5,
    height: 200,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  activeDot: {
    backgroundColor: 'blue',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  inactiveDot: {
    backgroundColor: 'gray',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default Carrousel;


