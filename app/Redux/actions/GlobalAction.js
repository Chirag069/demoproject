import WebServices from '../../services/WebServices';
import endPoint from '../../utils/endPoint';
import types from './types';
import Common from '../../utils/common';

/**
 * Action to Handle Loader
 *
 * @param {*} isLoading
 * @returns
 */
const handleLoader = (isLoading, isFetching) => {
  // console.log( 'obj', obj );
  return {
    type: types.IS_LOADING,
    payload: {
      isLoading: isFetching ? false : isLoading,
      isFetching: isFetching,
    },
  };
};

/**
 * Action to Handle Loader
 *
 * @param {*} isLoading
 * @returns
 */
const handleAbsoluteLoader = isAbsoluteLoading => ({
  type: types.IS_LOADING,
  payload: {isAbsoluteLoading: isAbsoluteLoading},
});

/**
 * Action to get Catch all crates
 *
 * @returns
 */
const getData = successCallback => {
  return (dispatch, getState) => {
    const {
      GlobalReducer: {hasNetworkConnection},
    } = getState();
    WebServices.getApi(
      endPoint.todos,
      ``,
      success => {
        const {data, status} = success;
        console.log(status);
        if (status === Common.statusCode.success && data) {
          dispatch({
            type: types.GET_API,
            payload: {data},
          });
          successCallback();
        }
      },
      fail => {
        WebServices.handleApiError(fail);
      },
    );
  };
};

export default {
  handleLoader,
  handleAbsoluteLoader,
  getData,
};
