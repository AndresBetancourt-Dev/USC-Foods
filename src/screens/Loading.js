import React, { useEffect } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {primaryStyles} from '../styles/BasicStyles';
import Logo from '../assets/images/Main/usc-food-logo.png';
import FormButton from "../components/FormButton"

const Loading = ({route,navigation}) => {
  if(!route){
    route = {};
    route.params = {};
  }
  return (
    <View style={primaryStyles.loading}>
      <Image source={Logo} style={primaryStyles.loadingLogo}></Image>
      { route.params.firstVisit || route.params.firstVisit != null?
        <FormButton buttonTitle="Ingresar"
        optionalStyles={{width : '90%'}}
        onPress={() => 
        navigation.navigate("Login")}></FormButton>
        : null
      }
    </View>
  );
};

export default Loading;
