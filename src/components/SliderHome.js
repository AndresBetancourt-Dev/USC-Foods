import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {sliderHome} from '../styles/SlidersStyles';
import Burger from '../assets/images/SliderHome/burger.jpg';
import Pizza from '../assets/images/SliderHome/pizza.jpg';
import Empanadas from '../assets/images/SliderHome/empanadas.jpg';
import Salchipapa from '../assets/images/SliderHome/salchipapa.jpg';
import Lasania from '../assets/images/SliderHome/pizza_al_paso.jpg';
const SliderHome = () => {
  return (
    <View style={sliderHome.container}>
      <Swiper height={200} autoplay={true}>
        <View style={sliderHome.slide}>
          <Image style={sliderHome.sliderImage} source={Burger}></Image>
        </View>
        <View style={sliderHome.slide}>
          <Image style={sliderHome.sliderImage} source={Pizza}></Image>
        </View>
        <View style={sliderHome.slide}>
          <Image style={sliderHome.sliderImage} source={Empanadas}></Image>
        </View>
        <View style={sliderHome.slide}>
          <Image style={sliderHome.sliderImage} source={Salchipapa}></Image>
        </View>
        <View style={sliderHome.slide}>
          <Image style={sliderHome.sliderImage} source={Lasania}></Image>
        </View>
      </Swiper>
    </View>
  );
};

export default SliderHome;
