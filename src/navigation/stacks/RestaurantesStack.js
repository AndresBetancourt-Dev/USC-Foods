import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurantes from '../../screens/Restaurantes';
import DetailsRestaurant from '../../screens/DetailsRestaurant';

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
        component={DetailsRestaurant}
        options={{headerShown: false}}
      />
    </StackRestaurante.Navigator>
  );
};

export default RestaurantesStack;
