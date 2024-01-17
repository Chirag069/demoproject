import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import scale, {verticalScale} from '../../utils/scale';
import {hs} from '../../utils/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import {fontregular, grey6, white} from '../../utils/color';

const InputBox = ({
  inputStyle,
  inputContainerStyle,
  leftIcon,
  rightIcon,
  touched,
  errors,
  errorStyle,
  ...props
}) => {
  return (
    <>
      <View style={[styles.inputContainerStyle, inputContainerStyle]}>
        {leftIcon && leftIcon()}
        <TextInput
          {...props}
          scrollEnabled={false}
          style={[styles.inputStyle, inputStyle]}
          placeholderTextColor={grey6}
        />
        {rightIcon && rightIcon()}
      </View>
      {touched && errors && (
        <Text style={[styles.errorText, props.errorStyle]}>{errors}</Text>
      )}
    </>
  );
};
export default InputBox;

const styles = StyleSheet.create({
  inputContainerStyle: {
    height: scale(40),
    justifyContent: 'flex-start',
    borderColor: 'grey',
    elevation: 10,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(10),
    backgroundColor: white,
  },
  inputStyle: {
    fontSize: scale(15),
    width: '85%',
    color: '#000',
    fontFamily: fontregular,
  },
  leftIconStyle: {
    backgroundColor: 'green',
    width: scale(20),
    height: scale(20),
    borderRadius: 10,
    marginHorizontal: scale(10),
  },
  rightIconStyle: {
    backgroundColor: 'green',
    width: scale(20),
    height: scale(20),
    borderRadius: 10,
    position: 'absolute',
    right: scale(10),
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(25),
    paddingTop: verticalScale(5),
  },
  errorText: {
    fontSize: scale(12),
    color: 'red',
    // paddingLeft: scale(20),
    paddingTop: verticalScale(5),
  },
});
