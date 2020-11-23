import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from './stacks/HomeStack';
import Contact from './stacks/ContactStack';
import Home from '../screens/Home';
import Restaurantes from '../screens/Restaurantes';
import CreateRestaurant from '../screens/CreateRestaurant';
//import  from "react-native-vector-icons"

const Tab = createMaterialBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Crear Restaurante"
      barStyle={{backgroundColor: '#00b3ff'}}>
      <Tab.Screen name="Crear Restaurante" component={CreateRestaurant} />
    </Tab.Navigator>
  );
};

export default AdminTabs;
