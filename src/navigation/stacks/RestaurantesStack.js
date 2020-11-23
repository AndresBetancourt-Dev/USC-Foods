import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuxiliarHome from '../../screens/AuxiliarHome';
import Home from '../../screens/Home';
import Restaurantes from '../../screens/Restaurantes';
import DetailsProducto from '../../screens/DetailsProducto';

const StackRestaurante = createStackNavigator();

const RestaurantesStack = () => {
  return (
    <StackRestaurante.Navigator>
      <StackRestaurante.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{headerShown: false}}
      />
      <StackRestaurante.Screen
        name="Details"
        component={DetailsProducto}
        options={{headerShown: false}}
      />
    </StackRestaurante.Navigator>
  );
};

export default RestaurantesStack;
