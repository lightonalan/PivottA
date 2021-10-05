import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './navigator/MainNavigator';
import AuthenStack from './navigator/AuthenStack';
import NavigationService from './service/NavigationService';

import componentNames from 'src/utils/constant/componentNames';


const Stack = createStackNavigator();

export default function AppContainer() { 
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}> 
           <Stack.Screen  name={'MAIN_NAVIGATOR_HOME'}  component={MainNavigator}  /> 
        <Stack.Screen name={componentNames.AUTH_STACK}  component={AuthenStack}  />
        {/* <Stack.Screen  name={'MAIN_NAVIGATOR_HOME'}  component={MainNavigator}  />  */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
