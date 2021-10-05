const DEBUG = __DEV__;

// import {
//   Sentry,
//   SentrySeverity,

// } from 'react-native-sentry';
let timeStart = 0;
export default LogInterceptor = {
  requestLog: config => {
    if (DEBUG) {
      timeStart = new Date();

    }
    // Sentry.captureMessage('REQUEST' + config.url, { level: SentrySeverity.Info });

    return config;
  },

  requestError: error => {
    if (DEBUG) {
  
    }
    return Promise.reject(error);
  },

  responseLog: response => {
    if (DEBUG) {
      if (!response) {
        return;
      }
      const config = response.config;
      if (!config) {
        return;
      }

    }
    // Sentry.captureMessage('RESPONSE' + response, { level: SentrySeverity.Warning });

    return response;
  },

  responseError: error => {
    if (DEBUG && error) {
      // const config = error.config;
      const response = error.response;
      if (response) {
        // console.log(`<<< ${response.status} ${config.method}: ${config.url}`);
        console.log(response);
      } else {
        // console.log(`<<< ${config.method}: ${config.url}`);
        console.log('network log error', error);
      }
    }
    return Promise.reject(error);
  },
};
