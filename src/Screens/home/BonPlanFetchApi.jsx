import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES, SHADOWS} from '../../constants';
import {Fonts} from '../../styles/fonts';

const BonPlanFetchApi = () => {
  const [photos, setPhotos] = useState([]); // Stocke les photos récupérées
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement
  const [error, setError] = useState(null); // Gère les erreurs

  useEffect(() => {
    // Remplacez par votre propre clé API
    const apiKey = 'V09rDPimycG9trmshBDIdwQbcZwzHW6eqwasCEnLI4yYaTBPyqIcRnhK'; // clé API
    const url = 'https://api.pexels.com/v1/search?query=shoes&per_page=10'; // URL de l'API

    const fetchPhotos = async () => {
      try {
        // Utilisation d'Axios pour envoyer la requête GET
        const response = await axios.get(url, {
          headers: {
            Authorization: apiKey, // Authentification via la clé API
          },
        });

        console.log(response.data); // Log des données pour vérifier la réponse de l'API

        if (response.data && response.data.photos) {
          setPhotos(response.data.photos); // Récupérer les photos de la réponse
        } else {
          setError('Aucune photo trouvée');
        }
      } catch (error) {
        console.log(error); // Affiche l'erreur dans la console pour un meilleur débogage
        setError('Une erreur est survenue'); // Gestion des erreurs
      } finally {
        setLoading(false); // Une fois la requête terminée, on arrête le chargement
      }
    };

    fetchPhotos(); // Appeler la fonction pour récupérer les photos
  }, []); // Le tableau vide [] signifie que l'effet s'exécute une seule fois au démarrage

  // Si les données sont en cours de chargement
  if (loading) {
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );
  }

  // Si une erreur est survenue
  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  // Affichage des photos récupérées
  return (
    <View style={styles.weekGenereuseContainer}>
      <View style={styles.weekGenereuse}>
        <Text style={styles.semaineGenereuseText}>Semaine</Text>
        <Text style={styles.semaineGenereuseText}>Genereuse</Text>
        <Text style={styles.semaineGenereuseText}>Product are</Text>
        <Text style={styles.semaineGenereuseText}>priced for 40%</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Masque le curseur horizontal
        data={photos}
        keyExtractor={item => item.id.toString()} // Assurez-vous d'utiliser un identifiant unique
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            {/* Assurez-vous que `item.src.small` existe avant de l'utiliser */}
            <Image source={{uri: item.src?.small}} style={styles.image} />
            <Text>{item.photographer}</Text>
            <Text
              style={{
                color: COLORS.blue,
                fontSize: SIZES.medium,
                fontWeight: 'bold',
              }}>
              {item.width} Fcfa
            </Text>
            <Text numberOfLines={1} style={styles.textAlt}>
              {item.alt}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>Aucune photo trouvée.</Text>} // Message si aucune photo n'est trouvée
      />
    </View>
  );
};

export default BonPlanFetchApi;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ajouté pour faire en sorte que le FlatList se comporte correctement lorsqu'il contient des enfants
    justifyContent: 'center', // Centrage des éléments
    alignItems: 'center', // Centrage des éléments
    gap: 10,
  },
  item: {
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.small,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  textAlt: {
    width: 100, // Limite la largeur du texte
    padding: 10,
  },
  weekGenereuseContainer: {
    flexDirection: 'row',
    
    
  },
  weekGenereuse: {
    backgroundColor: '#F24296',
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
    width: 120,
    height: 200,

  },
  semaineGenereuseText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: Fonts.Bold,
  },
});
