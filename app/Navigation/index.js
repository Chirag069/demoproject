import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {themeshade} from '../utils/color';
import {useSelector} from 'react-redux';
import TabStack from './TabStack';
import AuthStack from './AuthStack';

const Index = () => {
  const {access_token} = useSelector(state => state.AuthReducer);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeshade, // Set the background color you want
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={{flex: 1, backgroundColor: '#202020'}}>
        {access_token ? <TabStack /> : <AuthStack />}
      </View>
    </NavigationContainer>
  );
};

export default Index;
