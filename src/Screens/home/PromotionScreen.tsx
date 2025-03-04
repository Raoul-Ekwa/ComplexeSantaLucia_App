import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../constants/Colors';
import { useEffect, useState, useCallback } from 'react';
import { LuxeType } from '../../types/LuxeType';
import luxeData from '../../datas/luxe.json';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { S, VS, MS } from '../../styles/Responsive';

const PromotionScreen = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions(); // Dimensions for responsiveness
  const [luxuryItems, setLuxuryItems] = useState<LuxeType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState<LuxeType | null>(null);

  const numColumns = 2; // Adjust number of columns based on screen size

  useEffect(() => {
    try {
      setLuxuryItems(luxeData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }, []);

  const handlePress = useCallback((item: LuxeType) => {
    setSelectedItem(item);
    console.log('Item selected');
  }, []);

  const filteredItems = luxuryItems.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderLUXEItem = ({ item }: { item: LuxeType }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemModele}>
          {item.modele}
        </Text>
        <View style={styles.toutLemondeGagne}>
          <MaterialIcons name="local-fire-department" size={24} color="#FF3300" />
          <Text style={styles.gagneText}>Tous le monde gagne</Text>
        </View>
        <View style={styles.PriceModeleItem}>
          <Text style={styles.itemPrice}>{item.price} FCFA</Text>
          <Text style={styles.discountText}>-24%</Text>
        </View>
        <TouchableOpacity style={styles.shareIcon}>
          <AntDesign name="sharealt" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <View style={styles.iconHeaderLeft}>
            <Feather name="arrow-left" size={24} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Promotions</Text>
      </View>
      <View style={styles.Container}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => <CustomHeader navigation={navigation} />,
          }}
        />
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <View style={styles.searchInputWrapper}>
            <Ionicons name="search" size={18} style={styles.searchIcon} />
            <TextInput
              placeholder="Recherche un produit"
              value={searchText}
              onChangeText={setSearchText}
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/images/ScanIcon.png')} style={styles.scanIcon} />
          </TouchableOpacity>
        </View>
        {/* Filter Inputs */}
        <View style={styles.filterTextInput}>
          <AntDesign name="filter" size={24} color="black" />
          <View style={styles.filterInputs}>
            <TextInput placeholder="Filtre" style={styles.filterInput} />
            <TextInput placeholder="Tous les produits" style={styles.filterInput} />
            <TextInput placeholder="233 résultats" style={styles.filterInput} />
          </View>
        </View>
        {/* FlatList to display items */}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          numColumns={numColumns}
          key={numColumns}
          data={filteredItems}
          renderItem={renderLUXEItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PromotionScreen"
      component={PromotionScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#faf2f9',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 10,
    marginLeft: 10,
    backgroundColor: '#faf2f9',
  },
  iconHeaderLeft: {
    padding: S(10),
    borderRadius: S(50),
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: MS(18),
    fontWeight: 'bold',
    marginLeft: 30,
  },
  searchBar: {
    flexDirection: 'row',
    marginTop: VS(20),
    padding: S(10),
    backgroundColor: Colors.white,
    borderRadius: S(10),
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: S(10),
    color: Colors.black,
  },
  searchInput: {
    flex: 1,
    fontSize: MS(16),
    paddingVertical: VS(5),
  },
  scanIcon: {
    width: S(21),
    height: S(21),
    marginLeft: -S(20),
  },
  filterTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: VS(20),
    padding: S(10),
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: S(10),
    gap: S(10),
  },
  filterInputs: {
    flexDirection: 'row',
    gap: S(15),
    width: '80%',
  },
  filterInput: {
    flex: 1,
    fontSize: MS(14),
    padding: S(5),
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: S(4),
    marginBottom: VS(20),
    borderRadius: S(12),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '48%',
  },
  image: {
    width: '100%',
    height: VS(130),
    borderRadius: S(12),
    marginBottom: VS(12),
  },
  itemContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: S(10),
  },
  itemName: {
    fontSize: MS(18),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: VS(5),
  },
  itemModele: {
    fontSize: MS(14),
    color: 'gray',
    textAlign: 'center',
    marginBottom: VS(8),
  },
  toutLemondeGagne: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: VS(5),
  },
  gagneText: {
    fontSize: MS(12),
    color: '#FF3300',
    marginLeft: S(5),
  },
  PriceModeleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: VS(10),
    marginBottom: VS(20),
  },
  itemPrice: {
    color: '#02489B',
    fontSize: MS(16),
    fontWeight: 'bold',
    marginRight: S(10),
  },
  discountText: {
    color: '#FF3300',
    fontSize: MS(14),
    fontWeight: '600',
  },
  shareIcon: {
    position: 'absolute',
    top: VS(10),
    right: 0,
    backgroundColor: 'white',
    padding: S(8),
    borderRadius: S(20),
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: VS(30),
    marginLeft: S(30),
  },
  flatList: {
    paddingTop: VS(20),
    paddingBottom: VS(50),
  },
  flatListContainer: {
    paddingHorizontal: S(10),
  },
});
