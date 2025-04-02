import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReturnButtonAndTitle from '../components/ReturnButtonAndTitle';
import { COLORS, SIZES, SHADOWS } from '../constants';
import SearchBar from '../components/Home/SearchBar';
import { Fonts } from '../styles/fonts';
const PromotionScreen = () => {
  const [photos, setPhotos] = useState([]); // Stocke les photos récupérées
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement
  const [error, setError] = useState(null); // Gère les erreurs

  useEffect(() => {
    const apiKey = 'V09rDPimycG9trmshBDIdwQbcZwzHW6eqwasCEnLI4yYaTBPyqIcRnhK'; 
    const url = 'https://api.pexels.com/v1/search?query=watches&per_page=10'; 

    const fetchPhotos = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: apiKey, 
          },
        });

        if (response.data && response.data.photos) {
          setPhotos(response.data.photos); 
        } else {
          setError('Aucune photo trouvée');
        }
      } catch (error) {
        console.log(error);
        setError('Une erreur est survenue'); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPhotos(); 
  }, []); 

  if (loading) {
    return <View><Text>Chargement...</Text></View>;
  }

  if (error) {
    return <View><Text>{error}</Text></View>;
  }

  return (
    <View style={styles.container}>
       {/* Composant pour retourner à la home page */}
       <ReturnButtonAndTitle title="Promotions" />

        {/* La barre de recherche sans l'icône de scan et avec l'icône de filtre */}
       <SearchBar showScanIcon={false} addIconOfOurChoise={true} />

      {/* Liste des photos */}
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={{ uri: item.src?.small }} style={styles.image} />
            <Text style={{fontFamily: Fonts.Regular, fontWeight:'bold'}}>{item.photographer}</Text>
            <View style={styles.toutMondeGagne}>
              <Image source={require('../assets/images/fire-fill.png')} style={{width: 15, height: 15}} />
              <Text style={{fontSize: SIZES.small}}>Tous le monde gagne</Text>
            </View>
            <Text style={styles.price}>
              {item.width} Fcfa
            </Text>
            <Text numberOfLines={1} style={styles.ImageDescription}>
              {item.alt}
            </Text>

            <View style={styles.shareIcon}>
               <Ionicons name="share-social" size={25} color={COLORS.black} />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContainer} // Ajout du conteneur de la FlatList
      />
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
  item: {
    marginBottom: 20, // Augmenter l'espacement entre les éléments
    marginHorizontal: 10, // Ajouter de l'espacement entre les colonnes
    alignItems: 'center',
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.small,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  price: {
    color: COLORS.blue,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  ImageDescription: {
    width: 100,
    padding: 10,
    fontFamily: Fonts.Regular
  },
  flatListContainer: {
    paddingBottom: 50, // Ajoute de l'espace en bas pour permettre le défilement jusqu'à la fin
    marginTop: 10,
  },
  toutMondeGagne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 5,
  },
  shareIcon: {
    position: 'relative',
    Bottom: 10,
    left: 30,
  }
});


