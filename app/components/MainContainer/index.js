import React from 'react';
import {View} from 'react-native';
import {themeshade, white} from '../../utils/color';
import Loader from '../loader';

const MainContainer = ({children, style}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: white,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Loader(MainContainer);
