import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, ActivityIndicator} from 'react-native';
import {themecolor} from '../../utils/color';
import scale from '../../utils/scale';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    let style = this.props.absolute ? styles.absolute : styles.withoutAbsolute;
    return (
      <View style={{...style}}>
        <ActivityIndicator
          style={styles.indicator}
          color={themecolor}
          size={50}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  absolute: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
  },
  withoutAbsolute: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    color: themecolor,
    opacity: 0.7,
    height: scale(50),
    width: scale(50),
  },
});

Loader.defaultProps = {
  absolute: true,
};
