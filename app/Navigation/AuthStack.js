import {View, Text} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SignIn from '../Screens/SignIn/SignIn';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: '#000'},
        headerTintColor: '#000',
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
