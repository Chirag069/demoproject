import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import React, {Children, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import scale, {verticalScale} from '../../utils/scale';
import MainContainer from '../../components/MainContainer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import ProgressiveImage from '../ProgresshivImage/ProgressiveImage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomSlider = ({data, imagestyle}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handlePreviousButtonClick = () => {
    if (currentIndex == 0) {
      flatListRef.current.scrollToIndex({
        index: data.length - 1,
        animated: true,
      });
      setCurrentIndex(data.length - 1);
    } else {
      flatListRef.current.scrollToIndex({
        index: +currentIndex - 1,
        animated: true,
      });
      setCurrentIndex(+currentIndex - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (currentIndex == data.length - 1) {
      setCurrentIndex(0);
      flatListRef.current.scrollToIndex({
        index: 0,
        animated: true,
      });
    } else {
      flatListRef.current.scrollToIndex({
        index: +currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(+currentIndex + 1);
    }
  };

  const onViewRef = React.useRef(({viewableItems, changed}) => {
    changed.map(item => {
      setCurrentIndex(item.index);
    });
  });

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 80});

  const offset = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  React.useEffect(() => {
    setTimeout(() => {
      offset.value = withRepeat(
        withTiming(-offset.value, {duration: 1500}),
        -1,
        true,
      );
    }, 1500);
  }, []);

  const offset1 = useSharedValue(10);

  const animatedStyles1 = useAnimatedStyle(() => ({
    transform: [{translateX: offset1.value}],
  }));

  React.useEffect(() => {
    offset1.value = withRepeat(
      withTiming(-offset1.value, {duration: 1500}),
      -1,
      true,
    );
  }, []);
  return (
    <>
      <FlatList
        ref={flatListRef}
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        numColumns={1}
        horizontal={true}
        initialScrollIndex={currentIndex}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item, index}) => {
          return (
            <View>
              <ProgressiveImage
                uri={item.image || item.url}
                imagestyle={[styles.imgstyle, imagestyle]}
              />
              {currentIndex !== data.length - 1 ? (
                <Animated.View
                  style={[
                    animatedStyles,
                    {position: 'absolute', top: '49%', right: scale(5)},
                  ]}
                  entering={FadeIn.delay(200).duration(500).springify()}>
                  <TouchableOpacity onPress={handleNextButtonClick}>
                    <AntDesign name="right" size={scale(20)} color={'#000'} />
                  </TouchableOpacity>
                </Animated.View>
              ) : null}
              {currentIndex !== 0 ? (
                <Animated.View
                  style={[
                    animatedStyles1,
                    {position: 'absolute', top: '49%', left: scale(5)},
                  ]}
                  entering={FadeIn.delay(200).duration(500).springify()}>
                  <TouchableOpacity onPress={handlePreviousButtonClick}>
                    <AntDesign name="left" size={scale(20)} color={'#000'} />
                  </TouchableOpacity>
                </Animated.View>
              ) : null}
            </View>
          );
        }}
      />
    </>
  );
};

export default CustomSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgstyle: {
    height: verticalScale(200),
    width: windowWidth - scale(20),
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
