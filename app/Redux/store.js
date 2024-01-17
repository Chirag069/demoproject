import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
// import {createLogger} from 'redux-logger';
import {rootReducer} from './reducers';
import thunkMiddleware from 'redux-thunk';

const enhancers = [applyMiddleware(thunkMiddleware)];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
