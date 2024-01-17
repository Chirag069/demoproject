import types from '../actions/types';

const initialState = {
  access_token: null,
  userData: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOADING: {
      return {...state, ...action.payload};
    }
    case types.LOGIN: {
      return {...state, ...action.payload};
    }
    case types.LOGOUT: {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
