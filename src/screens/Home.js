import React from 'react';
import {ScrollView, Text, StyleSheet, Image, View} from 'react-native';
import SliderHome from '../components/SliderHome';
import {primaryStyles} from '../styles/BasicStyles';
import Market from '../components/Market';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <View>
      <Header props={props} />
      <ScrollView contentContainerStyle={primaryStyles.alignCenter}>
        <SliderHome />
        <Market />
      </ScrollView>
    </View>
  );
};

export default Home;
