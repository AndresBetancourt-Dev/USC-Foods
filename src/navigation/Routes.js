import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {RestaurantProvider} from './RestaurantProvider';

import Loading from '../screens/Loading';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const suscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return suscriber;
  }, []);

  if (initializing) return <Loading />;

  return (
    <NavigationContainer>
      {user ? (
        <RestaurantProvider>
          <AppStack />
        </RestaurantProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
