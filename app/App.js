import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {persistor, store} from './Redux/store';
import {white} from './utils/color';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={true} persistor={persistor}>
            <StatusBar backgroundColor={white} barStyle={'dark-content'} />
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
