import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { S, VS, MS } from '../../styles/Responsive';

const affiche = () => {
  Alert.alert('Téléchargement effectué');
};

const BonPlanScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerIconAndTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Feather name="arrow-left" size={S(24)} color={Colors.black} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Nos Bons Plans</Text>
          <View style={styles.headerRightContainer}>
            <TouchableOpacity style={styles.iconButtonShare}>
              <Entypo name="share" size={S(24)} color={Colors.black} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButtonMessage}>
              <Feather name="shopping-cart" size={S(24)} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/image94.png')} style={styles.image} resizeMode="contain" />
          <Image source={require('../../assets/images/image96.png')} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/image94.png')} style={styles.image} resizeMode="contain" />
          <Image source={require('../../assets/images/image96.png')} style={styles.image} resizeMode="contain" />
        </View>

        <TouchableOpacity style={styles.downloadButton} onPress={affiche}>
          <Text style={styles.buttonText}>Télécharger</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BonPlanScreen" component={BonPlanScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    minHeight: '100%',
    width: '100%',
    paddingVertical: VS(10),
  },
  headerIconAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: S(10),
    //paddingVertical: VS(0),
  },
  iconButton: {
    padding: S(10),
    borderRadius: S(50),
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: S(18),
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonShare: {
    marginRight: S(10),
  },
  iconButtonMessage: {
    marginRight: S(0),
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: VS(0),
    gap: S(10),
  },
  image: {
    width: S(150),
    height: VS(200),
  },
  downloadButton: {
    marginTop: VS(30),
    marginHorizontal: S(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02489B',
    borderRadius: S(10),
    paddingVertical: VS(15),
    paddingHorizontal: S(20),
  },
  buttonText: {
    color: 'white',
    fontSize: S(16),
    fontWeight: 'bold',
  },
});

