import * as React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';

const navigationRef = React.createRef();

export function navigate(routeName, params) {
  navigationRef.current?.navigate(routeName, params);
}

export function reset(routeName, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName, params}],
    }),
  );
}

export function pop() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}
export function goBack(number) {
  navigationRef.current?.goBack();
}
export function replace(routeName, params = {}) {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
}

export function push(routeName, params = {}) {
  navigationRef.current?.dispatch(StackActions.push(routeName, params));
}
// export const navigateReload = (routeName, params) => {
//   if (config.navigator && routeName) {
//     const action = StackActions.push({ routeName, params });
//     config.navigator.dispatch(action); 
//     }
// };
export default {
  navigationRef,
};
