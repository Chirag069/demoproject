import types from '../actions/types';

const initialState = {
  geteventdata: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EVENTS: {
      return {...state, ...action.payload};
    }
    case types.LIKE: {
      return {
        geteventdata: state.geteventdata.map(item =>
          item.event_id === action.payload
            ? {...item, isFavorite: item.isFavorite == 0 ? 1 : 0}
            : item,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
