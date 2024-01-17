import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {black, grey6, themecolor, themeshade, white} from '../../utils/color';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import scale from '../../utils/scale';

const ProgressiveImage = ({imagestyle, containerstyle, uri}) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={[styles.container, containerstyle, imagestyle]}>
      {/* {true && <ActivityIndicator size="large" color={themecolor} />} */}

      {loading && (
        <SkeletonPlaceholder
          borderRadius={4}
          backgroundColor={white}
          speed={1000}
          highlightColor={'rgba(0, 0, 0, 0.2)'}>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              width={
                imagestyle[0]?.width ? imagestyle[0]?.width : imagestyle?.width
              }
              height={
                imagestyle[0]?.height
                  ? imagestyle[0]?.height
                  : imagestyle?.height
              }
              borderRadius={scale(10)}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      )}

      <FastImage
        source={{uri: uri}}
        style={[styles.image, imagestyle]}
        onLoad={() => setLoading(false)}
        resizeMode="stretch"
      />
    </View>
  );
};

export default ProgressiveImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Adjust the height as needed
    width: 200, // Adjust the width as needed
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
