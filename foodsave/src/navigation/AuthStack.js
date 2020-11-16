import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from '../components/Loading';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched')
      .then((itemLaunched) => {
        if (itemLaunched == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Loading';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
