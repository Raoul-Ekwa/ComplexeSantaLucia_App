import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { SHADOWS } from "../../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../../styles/fonts";

const { height, width } = Dimensions.get("window");

const SearchBar = () => {

  const navigation =  useNavigation();

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
        <TouchableOpacity onPress={() => {}}>
          <Image source={require("../../assets/images/ScanIcon.png")} style={styles.logoScan}/>
        </TouchableOpacity>
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
    //textAlign: "center",
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
  }
});
