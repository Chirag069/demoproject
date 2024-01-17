import LottieView from 'lottie-react-native';
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {themecolor} from '../../utils/color';
import scale from '../../utils/scale';

import styles from './styles';

const Loader = ({absolute, loaderTop}) => {
  //  = absolute ? styles.absLoadingContainer : styles.loadingContainer
  let style;
  if (absolute) {
    console.log(styles.absLoadingContainer);
    style = styles.absLoadingContainer;
  }
  if (!absolute) {
    if (loaderTop) {
      style = styles.loaderTopStyle;
    }
    style = styles.loadingContainer;
  }
  return (
    <View style={style}>
      {/* <ActivityIndicator size="large" color={themecolor} /> */}
      <LottieView
        style={{height: scale(100), width: scale(100)}}
        source={require('../../assets/json/loading1.json')}
        autoPlay
        loop={true}
        resizeMode={'cover'}
      />
    </View>
  );
};

const LoaderHOC =
  WrapperComponent =>
  ({loadingLabel, absoluteLoading, loading, absolute, loaderTop, ...props}) => {
    const isAbsoluteLoading = () => {
      if (absoluteLoading) return <Loader absolute={true} />;
    };

    const loadingContainer = () => {
      if (loading) return <Loader absolute={absolute} loaderTop={loaderTop} />;
    };

    if (loading) {
      return loadingContainer();
    } else {
      return (
        <>
          <WrapperComponent {...props} />
          {isAbsoluteLoading()}
        </>
      );
    }
  };

export default LoaderHOC;