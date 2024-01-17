import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import scale, {verticalScale} from '../utils/scale';
import {
  black,
  grey5,
  grey6,
  themecolor,
  themeshade,
  white,
} from '../utils/color';
import {useSelector} from 'react-redux';
import Home from '../Screens/Home/Home';
import Events from '../Screens/Events/Events';
import Favourites from '../Screens/Favourites/Favourites';
import Profile from '../Screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          height: verticalScale(65),
          backgroundColor: white,
          paddingBottom: verticalScale(12),
          paddingTop: verticalScale(5),
        },
        tabBarLabelStyle: {
          fontSize: scale(10),
          color: black,
          fontWeight: '700',
        },
      }}
      options={{
        backgroundColor: '#000',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'search' : 'search'}
              style={
                focused ? styles.inactiveiconestyle : styles.activeiconestyle
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={'calendar-outline'}
              style={
                focused ? styles.inactiveiconestyle : styles.activeiconestyle
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name={'heart-o'}
              style={
                focused ? styles.inactiveiconestyle : styles.activeiconestyle
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name={'user-o'}
              style={
                focused ? styles.inactiveiconestyle : styles.activeiconestyle
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  iconecontainer: {
    borderBottomWidth: 2,
    borderColor: themecolor,
    paddingBottom: verticalScale(2),
  },
  activeiconestyle: {
    fontSize: scale(30),
    color: grey5,
  },
  inactiveiconestyle: {
    fontSize: scale(30),
    color: black,
  },
});
