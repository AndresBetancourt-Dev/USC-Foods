import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import ContactStack from './stacks/ContactStack';

const Drawer = createDrawerNavigator();

const AppStack = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={MainTabs} title="Perfil" />
      <Drawer.Screen name="ContactoDrawer" component={ContactStack} />
    </Drawer.Navigator>
  );
};

export default AppStack;
