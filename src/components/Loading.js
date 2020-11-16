import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {primaryStyles} from '../styles/BasicStyles';
import Logo from '../assets/images/Main/usc-food-logo.png';

const Loading = () => {
  return (
    <View style={primaryStyles.loading}>
      <Image source={Logo} style={{width: 200, height: 200}}></Image>
    </View>
  );
};

export default Loading;
