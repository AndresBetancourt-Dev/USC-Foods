import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CreateRestaurant from '../screens/CreateRestaurant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Crear Restaurante"
      activeColor="#fff"
      inactiveColor="#ddd"
      barStyle={{backgroundColor: '#00b3ff'}}>
      <Tab.Screen
        name="Crear Restaurante"
        component={CreateRestaurant}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="hotel" color={'#fff'} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminTabs;
