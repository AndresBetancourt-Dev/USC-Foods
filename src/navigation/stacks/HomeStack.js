import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuxiliarHome from '../../screens/AuxiliarHome';
import Home from '../../screens/Home';

const StackHome = createStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
