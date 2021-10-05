import LogInterceptor from './interceptors/log';
import AccessTokenInterceptor from './interceptors/accessToken';
import UnauthorizeInterceptor from './interceptors/unauthorize';
import AppConfig from 'src/common/config/AppConfig';
import DynamicServerManager from 'src/common/data/DynamicServerManager';
import axios from 'axios';
import configureStore from 'src/redux';
const { persistor, store } = configureStore();
// const user_id = store.getState().loginReducer.user_id; 
const getBaseUrl = () => {
  const dynamicServer = DynamicServerManager.getDynamicServer();
  return dynamicServer.protocol + dynamicServer.host;
};

const getInstance = () => {
  const BASE_URL = AppConfig.PRODUCTION_MODE
    ? AppConfig.PRODUCTION_ENDPOINT
    : getBaseUrl();
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
  });

  instance.interceptors.response.use(
    UnauthorizeInterceptor.onFullfilled,
    UnauthorizeInterceptor.onRejected,
  );

  instance.interceptors.request.use(
    LogInterceptor.requestLog,
    LogInterceptor.requestError,
  );

  instance.interceptors.response.use(
    LogInterceptor.responseLog,
    LogInterceptor.responseError,
  );

  instance.interceptors.request.use(
    AccessTokenInterceptor.addAccessToken,
    AccessTokenInterceptor.onRejected,
  );

  return instance;
};

const API = { instance: getInstance() };
API.switchServer = () => {
  API.instance = getInstance();
};


export default API;
