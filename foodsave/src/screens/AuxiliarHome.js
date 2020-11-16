import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const AuxiliarHome = () => {
  const {user, logout} = useContext(AuthContext);
  console.log(user);
  return (
    <View>
      <Text>Bienvenido {user.email}</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default AuxiliarHome;
