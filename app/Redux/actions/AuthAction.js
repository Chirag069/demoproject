import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import types from './types';
import GlobalAction from './GlobalAction';

/**
 * Action to Handle Login
 *
 * @param {*} obj
 * @returns
 */
export const onHandleLogin =
  (obj, successCallback = () => {}) =>
  (dispatch, getState) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.login,
      obj,
      success => {
        const {data, status} = success;
        console.log(data);
        console.log(status);
        console.log('success', data.data.token);
        if (status === common.statusCode.success && data) {
          if (data.success) {
            dispatch({
              type: types.LOGIN,
              payload: {
                userData: data.data.user,
                access_token: data.data.token,
              },
            });
            successCallback(data);
            dispatch(GlobalAction.handleLoader(false));
          } else {
            successCallback();
            dispatch(GlobalAction.handleLoader(false));
          }
          data.message && commonFunction.showToast(data.message);
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false));
        }
      },
      fail => {
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );
  };

/**
 * Action to Handle Logout
 *
 * @param {*} obj
 * @returns
 */
export const onHandleLogout = successCallback => {
  return (dispatch, getState) => {
    dispatch({
      type: types.LOGOUT,
      payload: {
        access_token: '',
        userData: [],
      },
    });
    successCallback(true);
    commonFunction.showToast('Logout successfull');
  };
};
