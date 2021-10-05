
import * as React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import componentNames from 'src/utils/constant/componentNames';
import HomeStack from 'src/navigation/navigator/tabs/HomeStack'
import ProfileStack from 'src/navigation/navigator/tabs/ProfileStack'
import FavoriteStack from 'src/navigation/navigator/tabs/FavoriteStack'
import CameraStack from 'src/navigation/navigator/tabs/CameraStack'
import SearchStack from 'src/navigation/navigator/tabs/SearchStack'

const Tab = createBottomTabNavigator();

const MainNavigator = () => {

  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="CameraStack" component={CameraStack} />
    <Tab.Screen name="SearchStack" component={SearchStack} />
    <Tab.Screen name="FavoriteStack" component={FavoriteStack} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
  );
};

export default MainNavigator;
