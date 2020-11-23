import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import RestaurantItem from '../components/RestaurantItem';

const Restaurantes = () => {
  const handleClick = () => {
    console.log('clikc');
  };
  return (
    <View>
      <Header />
      <ScrollView style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Poppins-ExtraBold',
          }}>
          Restaurantes
        </Text>

        <RestaurantItem
          image={require('../assets/images/SliderHome/burger.jpg')}
          title={'Restaurante'}
          shortDescription={'Descripcion Corta'}
        />
        <RestaurantItem
          image={require('../assets/images/SliderHome/empanadas.jpg')}
          title={'Restaurante'}
          shortDescription={'Descripcion Corta'}
        />
        <RestaurantItem
          image={require('../assets/images/SliderHome/salchipapa.jpg')}
          title={'Restaurante'}
          shortDescription={'Descripcion Corta'}
        />
      </ScrollView>
    </View>
  );
};

export default Restaurantes;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
});
