import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {themecolor, white} from '../../utils/color';
import {typography} from '../../utils/typography';
import scale from '../../utils/scale';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, props.buttonStyle]}
      onPress={props.onPress}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  mainContainer: {
    height: scale(40),
    backgroundColor: themecolor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(4),
  },
  textStyle: {
    fontSize: scale(15),
    fontFamily: typography.Poppins_SemiBold,
    color: white,
  },
});

export default Button;
