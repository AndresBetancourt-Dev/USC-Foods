import React from 'react';
import {View, Text} from 'react-native';
import SliderHome from '../components/SliderHome';
import {primaryStyles} from '../styles/BasicStyles';

const Home = (props) => {
  return (
    <View style={primaryStyles.alignCenter}>
      <SliderHome />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
