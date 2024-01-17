import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer.js';
import GlobalReducer from './GlobalReducer.js';
import HomeReducer from './HomeReducer';

const appReducer = combineReducers({
  AuthReducer,
  GlobalReducer,
  HomeReducer,
});

export const rootReducer = (state, action) => {
  console.log(action.type, 'type');
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
