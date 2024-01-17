import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import scale from '../../utils/scale';

const NoData = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={{height: scale(200), width: scale(200)}}
        source={require('../../assets/json/nodata.json')}
        autoPlay
        loop={true}
        resizeMode={'cover'}
      />
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
