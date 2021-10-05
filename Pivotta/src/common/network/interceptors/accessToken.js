import configureStore from 'src/redux';
const {persistor, store} = configureStore();
export default AccessTokenInterceptor = {
  
  addAccessToken: config => { 
    const accessToken = store.getState().loginReducer.token; 
    if (accessToken) {
      const headers = { ...config.headers, 
        "Authorization": `Bearer ${accessToken}` , 
       'Content-Type': 'application/json' };
      config.headers = headers;
    }
    return config;
  },

  onRejected: error => {
    return Promise.reject(error);
  },
};
