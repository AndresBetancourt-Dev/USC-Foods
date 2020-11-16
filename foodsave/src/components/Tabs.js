import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Location from '../screens/Location';
const Tab = createMaterialBottomTabNavigator();

function Tabs(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ubicacion" component={Location} />
    </Tab.Navigator>
  );
}

export default Tabs;
