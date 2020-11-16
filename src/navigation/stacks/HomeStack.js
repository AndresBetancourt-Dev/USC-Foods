import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuxiliarHome from '../../screens/AuxiliarHome';

const StackHome = createStackNavigator();

const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name="HomeScreen" component={AuxiliarHome} />
    </StackHome.Navigator>
  );
};

export default HomeStack;
