import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SliderHome from '../components/SliderHome';
import {primaryStyles} from '../styles/BasicStyles';
import Market from '../components/Market';
import Header from '../components/Header'
import Restaurantes from './Restaurantes';
import DetailsProducto from './DetailsProducto';


const Home = (props) => {
  return (
    <View style={primaryStyles.alignCenter}>
      <Header/>
      <SliderHome />
      <Market/>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
