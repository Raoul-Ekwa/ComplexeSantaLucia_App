import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { SIZES, COLORS } from '../constants';

const ReturnButtonAndTitle = ({title}) => {
    const navigation = useNavigation();
    const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonReturn}>
        <TouchableOpacity style={styles.arrowbackWrapper} onPress={() => handleGoBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    </View>
  );
};

export default ReturnButtonAndTitle;

const styles = StyleSheet.create({
  container: {
    //padding: 20,
  },
  buttonReturn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:15
    
  },
  arrowbackWrapper: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
