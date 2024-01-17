import types from '../actions/types';

const initialState = {
  geteventdata: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EVENTS: {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
