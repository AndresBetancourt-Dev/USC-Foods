import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import ContactStack from './stacks/ContactStack';
import AdminTabs from './AdminTabs';
import {DrawerContent} from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const AppStack = (props) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainTabs} title="Perfil" />
      <Drawer.Screen name="Admin" component={AdminTabs} />
    </Drawer.Navigator>
  );
};

export default AppStack;
