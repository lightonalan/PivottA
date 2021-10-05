// import Config from './DevConfig';
import Config from './ProductConfig';
const AppConfig = {
  ...Config,
  appVersion: '3.0.90',
  isEnableFloatWidget: false,
};
export default AppConfig;
