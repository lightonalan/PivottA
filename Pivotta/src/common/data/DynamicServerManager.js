import * as LocalStorage from './LocalStorage';
import AppConfig from 'src/common/config/AppConfig';
import _ from 'lodash';
export const SERVER_DATA = [
  {
    server: AppConfig.TEST_SERVER,
    host: AppConfig.TEST_ENDPOINT,
  },
  {
    server: AppConfig.DEV_SERVER,
    host: AppConfig.DEV_ENDPOINT,
  },
  {
    server: AppConfig.PRO_SERVER,
    host: AppConfig.PRODUCTION_ENDPOINT,
  },
  {
    server: AppConfig.CUSTOMIZE_SERVER,
    host: AppConfig.CUSTOMIZE_ENDPOINT,
  },
];
const INIT_DATA = {
  server: AppConfig.TEST_SERVER,
  host: AppConfig.TEST_ENDPOINT,
  protocol: AppConfig.PROTOCOL,
};

const DynamicServerManager = {
  dynamicServer: INIT_DATA,
};

const DYNAMIC_SERVER = 'dynamicServer';

DynamicServerManager.initialize = () => {
  return LocalStorage.get(DYNAMIC_SERVER, (error, result) => {
    DynamicServerManager.dynamicServer = _.isEmpty(result)
      ? INIT_DATA
      : JSON.parse(result);
  });
};

DynamicServerManager.saveDynamicServer = dynamicServer => {
  DynamicServerManager.dynamicServer = dynamicServer;
  return LocalStorage.set(DYNAMIC_SERVER, dynamicServer);
};

DynamicServerManager.clear = () => {
  DynamicServerManager.dynamicServer = null;
  LocalStorage.remove(DYNAMIC_SERVER);
};

DynamicServerManager.getDynamicServer = () => {
  return DynamicServerManager.dynamicServer;
};

export default DynamicServerManager;
