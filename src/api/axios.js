import axios from 'axios';


axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';
axios.defaults.headers['Content-Type'] = 'application/json';

// axios.interceptors.request.use(async conf => {
//     // const state = store.getState();
//     // let token = getUserToken(state);
//     // if (!token) {
//     //   token = await AsyncStorage.getItem('userToken');
//     // }
//     // console.log({token});
//     // conf.headers.Authorization = `Bearer ${token}`;
//     // conf.headers['app-version'] = getAppVersionNumber();
//     // conf.headers['app-OS'] = `${isAndroid ? 'android' : 'ios'}`;
//     // console.log({conf});
//     return conf;
//   },
//   error => {
//     console.log({error});
//     return Promise.reject(error);
//   }
// );
//
// axios.interceptors.response.use((response) => {
//   return response;
// }, async function (error) {
//   console.log({errorAxios: error});
//   const responseStatus = _.get(error, 'response.status', null);
//   if (responseStatus === 401 || responseStatus === 403) {
//     //
//     // //Chiamato alla login
//     // if (_.get(error, 'config.url', '') === '/users/me') {
//     //   return Promise.reject(error);
//     // }
//     //
//     // console.log(responseStatus, 'LOGOUT');
//     // logout();
//     return Promise.reject(error);
//   } else {
//     return Promise.reject(error);
//   }
// });
//
//
// export const axiosSSO = axios.create({
//   baseURL: config.apiUrlLogin,
// });
//
//
// export const AXIOS_ERRORS = {
//   NETWORK_ERROR: 'Network Error',
//   NOT_OK: 'not ok',
//   GENERIC_ERROR: 'Generic Error 500',
//   ERROR_409: 409,
//   ERROR_422: 422,
//   ERROR_404: 404,
//   ERROR_400: 400,
// };
//
// export const getErrorType = (error) => {
//   const errorCode = _.get(error, 'response.status', 500);
//   const message = error.message;
//
//   if (message === 'Network Error') {
//     return AXIOS_ERRORS.NETWORK_ERROR;
//   }
//   if (message === 'not ok') {
//     return AXIOS_ERRORS.NOT_OK;
//   }
//   if (errorCode === 500) {
//     return AXIOS_ERRORS.GENERIC_ERROR;
//   }
//   if (errorCode === 409) {
//     return AXIOS_ERRORS.ERROR_409;
//   }
//   if (errorCode === 422) {
//     return AXIOS_ERRORS.ERROR_422;
//   }
//   if (errorCode === 404) {
//     return AXIOS_ERRORS.ERROR_404;
//   }
//   if (errorCode === 400) {
//     return AXIOS_ERRORS.ERROR_400;
//   }
//   return null;
// };
