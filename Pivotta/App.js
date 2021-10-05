import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AppContainer from 'src/navigation/AppContainer';
import configureStore from 'src/redux';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {RootSiblingParent} from 'react-native-root-siblings';

export default function App() {
  const {persistor, store} = configureStore();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
}
