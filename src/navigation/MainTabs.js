import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from './stacks/HomeStack';
import Contact from './stacks/ContactStack';
import RestaurantesStack from './stacks/RestaurantesStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="#ddd"
      barStyle={{backgroundColor: '#00b3ff'}}>
      <Tab.Screen
        name="Restaurantes"
        component={RestaurantesStack}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="utensils" color={'#fff'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={'#fff'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={Contact}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="globe-americas" color={'#fff'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
