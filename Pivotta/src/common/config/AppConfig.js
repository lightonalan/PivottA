// import Config from './DevConfig';
import Config from './ProductConfig';
const AppConfig = {
  ...Config,
  appVersion: '1.0',
  isEnableFloatWidget: false,
};
export default AppConfig;
