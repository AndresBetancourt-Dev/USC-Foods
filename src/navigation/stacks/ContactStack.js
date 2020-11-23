import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../../screens/Contact';

const StackContact = createStackNavigator();

const ContactStack = () => {
  return (
    <StackContact.Navigator>
      <StackContact.Screen
        name="ContactScreen"
        component={Contact}
        options={{headerShown: false}}
      />
    </StackContact.Navigator>
  );
};

export default ContactStack;
