// In App.js in a new project

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from './src/components/Loading';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>{isLoading ? <Loading /> : null}</NavigationContainer>
  );
};

export default App;
