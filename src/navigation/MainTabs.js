import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from './stacks/HomeStack';
import Contact from './stacks/ContactStack';
import Home from '../screens/Home';
import Restaurantes from '../screens/Restaurantes';

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Restaurantes" component={Restaurantes} />
      <Tab.Screen name="Contacto" component={Contact} />
    </Tab.Navigator>
  );
};

export default MainTabs;
