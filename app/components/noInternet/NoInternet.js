import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  fontbold,
  fontregular,
  themecolor,
  themeshade,
  white,
} from '../../utils/color';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import {typography} from '../../utils/typography';
import scale from '../../utils/scale';

export default class NoInternet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Feather
          name={'access-point-network-off'}
          size={100}
          color={themecolor}
        />
        <Text style={styles.textStyle}>No Internet Connection</Text>
        <Text style={styles.textStyle1}>Please Check your connection</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle}>
          <Text style={styles.textStyle2}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: themeshade,
  },
  textStyle: {
    color: themecolor,
    fontSize: scale(23),
    fontFamily: fontbold,
    marginTop: 30,
  },
  textStyle1: {
    color: themecolor,
    fontSize: scale(16),
    fontFamily: fontregular,
    marginTop: 10,
    textAlign: 'center',
  },
  textStyle2: {
    color: white,
    fontSize: scale(16),
    fontFamily: fontregular,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: themecolor,
    width: '90%',
    height: 40,
    borderRadius: 20,
  },
});
