import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {ActionSheetIOS, Platform, StyleSheet, Text, View} from 'react-native';
import {colors} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {typography} from '../../utils/typography';
import InputBox from '../InputBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import scale, {verticalScale} from '../../utils/scale';

const PickerModal = ({value, data, setValue, isSideView}) => {
  const openIosPicker = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...data],
        cancelButtonIndex: 0,
        userInterfaceStyle: 'white',
      },
      buttonIndex => {
        if (buttonIndex !== 0) {
          setValue(data[buttonIndex - 1]);
        }
      },
    );
  };

  if (Platform.OS === 'ios') {
    return (
      <View>
        <TouchableOpacity onPress={() => openIosPicker()}>
          <InputBox
            placeholder="Select service"
            inputContainerStyle={styles.inputContainerStyle}
            rightIcon={() => (
              <Ionicons
                name="caret-down-outline"
                size={scale(20)}
                color={colors.grey2}
                style={{right: isSideView ? scale(5) : -scale(20)}}
              />
            )}
            value={value}
            inputStyle={styles.inputTextStyle}
            editable={false}
          />
        </TouchableOpacity>
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
          numberOfLines={1}
          style={styles.pickerStyle}>
          {data?.map((item, index) => {
            return (
              <Picker.Item
                key={index}
                label={typeof item === 'string' ? item : item.name}
                value={typeof item === 'string' ? item : item.id || item.name}
              />
            );
          })}
        </Picker>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: scale(4),
    borderColor: colors.grey4,
    marginTop: verticalScale(5),
    overflow: 'hidden',
  },
  pickerStyle: {
    height: scale(48),
    bottom: verticalScale(2),
    marginLeft: -scale(20),
    left: scale(15),
    marginRight: scale(10),
  },
  inputContainerStyle: {
    marginTop: verticalScale(5),
    backgroundColor: 'white',
    borderColor: colors.grey4,
  },
  inputTextStyle: {fontSize: scale(14), color: 'black'},
});

export default PickerModal;
