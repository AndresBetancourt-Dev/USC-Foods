import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from './stacks/HomeStack';
import Contact from './stacks/ContactStack';
import Home from '../screens/Home';
import Restaurantes from '../screens/Restaurantes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{backgroundColor: '#00b3ff'}}>
      <Tab.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          tabBarIcon: ({color}) => {
            <MaterialCommunityIcons
              name="silverware"
              color={'#fff'}
              size={25}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => {
            <MaterialCommunityIcons name="home" n color={'#fff'} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={Contact}
        options={{
          tabBarIcon: ({color}) => {
            <MaterialCommunityIcons name="map" color={'#fff'} size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
