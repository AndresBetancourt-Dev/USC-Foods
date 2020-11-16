import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabs from './MainTabs';

const Drawer = createDrawerNavigator();

const AppStack = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={MainTabs} />
    </Drawer.Navigator>
  );
};

export default AppStack;
