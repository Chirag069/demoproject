import WebServices from '../../services/WebServices';
import common from '../../utils/common';
import commonFunction from '../../utils/commonFunction';
import endPoint from '../../utils/endPoint';
import GlobalAction from './GlobalAction';
import types from './types';

export const GetEventsAction = successCallback => {
  return (dispatch, getState) => {
    dispatch(GlobalAction.handleLoader(true));
    WebServices.postApiCall(
      endPoint.event,
      '',
      success => {
        const {data, status} = success;
        console.log(status);
        console.log('success', data);
        if (status === common.statusCode.success && data) {
          if (data.success) {
            dispatch({
              type: types.EVENTS,
              payload: {geteventdata: data.data.events},
            });
            successCallback(data.data);
            dispatch(GlobalAction.handleLoader(false));
          } else {
            successCallback();
            data.message && commonFunction.showToast(data.message);
            dispatch(GlobalAction.handleLoader(false));
          }
        } else {
          data.message && commonFunction.showToast(data.message);
          dispatch(GlobalAction.handleLoader(false));
        }
      },
      fail => {
        console.log('fails', fail);
        WebServices.handleApiError(fail);
        dispatch(GlobalAction.handleLoader(false));
      },
    );
  };
};

export const LikeAction = id => {
  return (dispatch, getState) => {
    dispatch({
      type: types.LIKE,
      payload: id,
    });
  };
};
