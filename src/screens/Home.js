import React from 'react';
import {ScrollView, Text, StyleSheet, Image, View} from 'react-native';
import SliderHome from '../components/SliderHome';
import {primaryStyles} from '../styles/BasicStyles';
import Market from '../components/Market';
import Header from '../components/Header';
import Restaurantes from './Restaurantes';
import DetailsProducto from './DetailsProducto';

const Home = (props) => {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={primaryStyles.alignCenter}>
        <SliderHome />
        <Market />
      </ScrollView>
    </View>
  );
};

export default Home;
