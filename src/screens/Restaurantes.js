import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RestaurantItem from '../components/RestaurantItem';

const Restaurantes = () => {
  return (
    <ScrollView style={styles.cardsWrapper}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        }}>
        Recently Viewed
      </Text>

      <RestaurantItem
        image={require('../assets/images/SliderHome/burger.jpg')}
        title={'Restaurante'}
        shortDescription={'Descripcion Corta'}
      />
      <RestaurantItem
        image={require('../assets/images/SliderHome/burger.jpg')}
        title={'Restaurante'}
        shortDescription={'Descripcion Corta'}
      />
      <RestaurantItem
        image={require('../assets/images/SliderHome/burger.jpg')}
        title={'Restaurante'}
        shortDescription={'Descripcion Corta'}
      />
      <RestaurantItem
        image={require('../assets/images/SliderHome/burger.jpg')}
        title={'Restaurante'}
        shortDescription={'Descripcion Corta'}
      />
      <RestaurantItem
        image={require('../assets/images/SliderHome/burger.jpg')}
        title={'Restaurante'}
        shortDescription={'Descripcion Corta'}
      />
      <RestaurantItem
        image={require('../assets/images/SliderHome/burger.jpg')}
        title={'Restaurante'}
        shortDescription={'Descripcion Corta'}
      />
    </ScrollView>
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
