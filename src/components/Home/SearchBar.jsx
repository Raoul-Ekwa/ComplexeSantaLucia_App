import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Text,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { SHADOWS } from "../../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../../styles/fonts";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';


const { height, width } = Dimensions.get("window");

const SearchBar = ({ showScanIcon = true, addIconOfOurChoise }) => { 

const navigation = useNavigation();

  return (
    <View style={styles.SearchBarContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search" size={26} color={COLORS.gray} />
        </TouchableOpacity>
        <TextInput
          placeholder="What are you looking for"
          value=""
          onPressIn={() => {}}
          style={styles.input}
        />
        {showScanIcon && (
          <TouchableOpacity onPress={() => {}}>
            <Image source={require("../../assets/images/ScanIcon.png")} style={styles.logoScan} />
          </TouchableOpacity>
        )}

        {addIconOfOurChoise && (
          <TouchableOpacity onPress={() => navigation.navigate("ModalFilterAgence")}> 
            <FontAwesome name="filter" size={26} color={COLORS.gray} />
          </TouchableOpacity>
        )}
      </View>


      
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginVertical: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.small,
    width: "95%", 
    marginHorizontal: 15
  },
  input: {
    width: "90%", 
    height: 40, 
    fontSize: SIZES.small, 
    paddingLeft: 10,
    fontFamily: Fonts.Bold,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.xLarge + 2,
  },
  cameraIconContainer: {
    backgroundColor: "darkgreen",
    padding: 12,
    borderRadius: SIZES.xSmall,
    marginRight: 18,
    ...SHADOWS.small 
  },
  logoScan: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  // Style du Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond transparent sombre
  },
  modalContent: {
    width: width - 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    height: 40,
    marginBottom: 20,
  },
  sliderText: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxContainer: {
    width: "100%",
    marginBottom: 20,
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

