import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Authen from 'src/screens/authen/Authen'; 
import componentNames from 'src/utils/constant/componentNames';

const Navigation = createStackNavigator();
const AuthenStack = () => (
  <Navigation.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={componentNames.AUTHEN}>
    <Navigation.Screen name={componentNames.AUTHEN} component={Authen} /> 
    </Navigation.Navigator>
);

export default AuthenStack;
