import AuthAction from '../Redux/actions/AuthAction';
import {store} from '../Redux/store';
import Common from '../utils/common';
import CommonFunction from '../utils/commonFunction';
import Strings from '../utils/strings';
// import {CommonActions} from '@react-navigation/core';

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const postApiCall = (endPoint, params, successCallback, errorCallback) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstanceFormData
    .post(endPoint, params)
    .then(response => {
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           console.log('Error in Refresh token', error);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

const postApiCallFixed = (endPoint, params, successCallback, errorCallback) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstanceFormDataFixed
    .post(endPoint, params)
    .then(response => {
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           console.log('Error in Refresh token', error);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const postFormDataApiCall = (
  endPoint,
  params,
  successCallback,
  errorCallback,
) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstance
    .post(endPoint, params)
    .then(response => {
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           console.log('Error in Refresh token', error);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const getApiCall = (endPoint, params = '', successCallback, errorCallback) => {
  console.log({endPoint, params});
  console.log(
    'BASE_URL***********',
    Common.BASE_URL + endPoint + '?' + params,
    {},
  );

  Common.axiosInstance
    .get(Common.BASE_URL + endPoint + '?' + params, {})
    .then(response => {
      console.log(response);
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        console.log('data', data);
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           let data = error.response.data;
            //           console.log('Error in Refresh token', data);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const patchApiCall = (endPoint, params, successCallback, errorCallback) => {
  console.log({endPoint, params});
  Common.axiosInstance
    .patch(endPoint, params)
    .then(response => {
      console.log('response: ', response);
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           console.log('Error in Refresh token', error);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },

              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};
/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const putApiCall = (endPoint, params, successCallback, errorCallback) => {
  console.log({endPoint, params, successCallback});
  Common.axiosInstance
    .put(endPoint, params)
    .then(response => {
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
      let payload = {
        data: {
          status: '',
          // message: 'Please try again later',
        },
      };
      errorCallback(payload);
    });
};
/**
 * Logout API
 */
const logOutApiCall = () => {
  store.dispatch(AuthAction.onHandleLogout(() => {}));
};

/**
 *
 * @param apiUrl api url point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 **/
const getApi = (endPoint, params = '', successCallback, errorCallback) => {
  console.log({endPoint, params});
  Common.axiosInstance
    .get(endPoint + params, {})
    .then(response => {
      console.log(response);
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        console.log('data', data);
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           let data = error.response.data;
            //           console.log('Error in Refresh token', data);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

const getApifixed = (endPoint, params = '', successCallback, errorCallback) => {
  console.log({endPoint, params});
  Common.axiosInstanceFixed
    .get(endPoint + params, {})
    .then(response => {
      console.log(response);
      successCallback(response);
    })
    .catch(error => {
      console.log('API Call error', error);
      if (error.code === 'ECONNABORTED') {
        let payload = {
          data: {
            status: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        console.log('data', data);
        const {message, status} = data;
        switch (error.response.status) {
          case Common.api_error_code.tokenExpire:
            // refreshToken((status) => {
            //   if (status) {
            //     setTimeout(() => {
            //       Common.axiosInstance
            //         .post(endPoint, params)
            //         .then((response) => {
            //           successCallback(response);
            //         })
            //         .catch((error) => {
            //           let data = error.response.data;
            //           console.log('Error in Refresh token', data);
            //           // Common.showAlert(
            //           //   'Session Expired !!',
            //           //   'Your session is expired. Please login again.',
            //           //   () => logOutApiCall(),
            //           //   () => {},
            //           // );
            //           errorCallback();
            //         });
            //     }, 100);
            //   }
            // });
            break;
          case Common.api_error_code.unauthorized:
            CommonFunction.showAlert(
              Strings.alert,
              message,
              undefined,
              undefined,
              () => {
                logOutApiCall();
              },
              () => {},
              true,
            );
            break;
          default:
            break;
        }
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            status: '',
            // message: 'Please try again later',
          },
        };
        errorCallback(payload);
      }
    });
};

/**
 * Global API multi purpose handler
 * @param payload
 * @param dropdown
 */

const handleApiError = payload => {
  try {
    if (payload.status === 419) {
    } else {
      if (payload.data.message.length > 0) {
        CommonFunction.showToast(payload.data.message);
      }
    }
  } catch (error) {}
};

/**
 * Refresh token API, call when session has been expire
 * @param payload
 * @param dropdown
 */

// const refreshToken = async (callback) => {
//   Common.axiosInstance
//     .post(EndPoint.token.refresh, {
//       refresh_token: store.getState().UserReducer.refresh_token,
//     })
//     .then((respone) => {
//       console.log('my new token', respone);
//       const {statusCode, data} = respone.data;
//       if (statusCode === Common.statusCode.success) {
//         store.dispatch(
//           UserAction.updateAccessRefreshToken(
//             data.access_token,
//             data.refresh_token,
//           ),
//         );
//         callback(true);
//       } else if (statusCode === 400) {
//         throw 400;
//       }
//       callback(false);
//     })
//     .catch((error) => {
//       Common.showAlert(
//         'Session Expired !!',
//         'Your session is expired. Please login again.',
//         () => logOutApiCall(),
//         () => {},
//       );
//     });
// };
/**
 * export all function
 */
export default {
  getApi,
  getApifixed,
  putApiCall,
  getApiCall,
  postApiCall,
  postApiCallFixed,
  postFormDataApiCall,
  patchApiCall,
  logOutApiCall,
  handleApiError,
};
