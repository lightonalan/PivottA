import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import componentNames from 'src/utils/constant/componentNames';
import HomeStack from 'src/navigation/navigator/tabs/HomeStack';
import ProfileStack from 'src/navigation/navigator/tabs/ProfileStack';
import FavoriteStack from 'src/navigation/navigator/tabs/FavoriteStack';
import CameraStack from 'src/navigation/navigator/tabs/CameraStack';
import SearchStack from 'src/navigation/navigator/tabs/SearchStack';
import IconComponent from 'src/components/Icon';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: true,
        style: {
          position: 'absolute',
          bottom: 40,
          left: 20,
          right: 20,
          elevation: 0,
          height: 80,
          zIndex: 1,
          backgroundColor: '#fff',
          borderRadius: 40,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_chat' : 'ic_chat'} />
              <Text style={styles.labelTab}>チャット</Text>
            </View>
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_meeting' : 'ic_meeting'} />
              <Text style={styles.labelTab}>ミーティング</Text>
            </View>
          ),
        }}
        name="CameraStack"
        component={CameraStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 85,
                height: 85,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 85 / 2,
                top: 5,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: '#59CDD5',
                }}>
                <IconComponent icon={focused ? 'ic_home' : 'ic_home'} />
                <Text style={styles.labelTab}>ホーム</Text>
              </View>
            </View>
          ),
        }}
        name="SearchStack"
        component={SearchStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_bookmark' : 'ic_bookmark'} />
              <Text style={styles.labelTab}>ミーティング</Text>
            </View>
          ),
        }}
        name="FavoriteStack"
        component={FavoriteStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_profile' : 'ic_profile'} />
              <Text style={styles.labelTab}>ミーティング</Text>
            </View>
          ),
        }}
        name="ProfileStack"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  shadow: {
    shadowColor: '#999DA1',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  labelTab: {
    fontSize: 10,
    marginTop: 10,
  },
});
