import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  black,
  themeshade,
  white,
  themecolor,
  fontbold,
} from '../../utils/color';
import scale, {verticalScale} from '../../utils/scale';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TopHeader = ({title, showLeftIcon = true, OnPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Category}>
      {showLeftIcon && (
        <TouchableOpacity
          onPress={() => {
            OnPress ? OnPress() : navigation.goBack();
          }}
          style={styles.backbuttoncontainer}>
          <AntDesign name="left" size={scale(20)} color={black} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.rightPlaceholder}></View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeshade,
  },

  Category: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(15),
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },

  backbuttoncontainer: {
    position: 'absolute',
    left: scale(20),
    borderWidth: 1,
    borderColor: black,
    backgroundColor: white,
    padding: scale(6),
    borderRadius: scale(8),
  },

  headerText: {
    color: black,
    fontSize: scale(23),
    fontFamily: fontbold,
  },

  rightPlaceholder: {
    position: 'absolute',
    right: scale(20),
    height: verticalScale(40),
    width: scale(40),
  },

  CategoryHeader: {
    color: themecolor,
    fontSize: scale(20),
    marginTop: verticalScale(10),
  },

  CategoryImage: {
    marginTop: verticalScale(4),
    height: verticalScale(170),
    width: '100%',
    borderRadius: scale(10),
  },
});
