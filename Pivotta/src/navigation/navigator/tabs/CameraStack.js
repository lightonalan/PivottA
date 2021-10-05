import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/home/Home'; 
const Navigation = createStackNavigator();
const CameraStack = () => (
  <Navigation.Navigator
    screenOptions={{
      headerShown: false,
    }}> 
    <Navigation.Screen name={'Home'} component={Home} /> 
  </Navigation.Navigator>
);

export default CameraStack;
