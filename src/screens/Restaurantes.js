import React, {useContext, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import RestaurantItem from '../components/RestaurantItem';
import {HeaderTitle} from '../components/Text.styles';
import {RestaurantContext} from '../navigation/RestaurantProvider';

const Restaurantes = (props) => {
  const {getAllRestaurants, restaurants} = useContext(RestaurantContext);

  useEffect(() => {
    getAllRestaurants();
  }, []);
  return (
    <View>
      <Header props={props} />
      <ScrollView style={styles.cardsWrapper}>
        <HeaderTitle>Restaurantes</HeaderTitle>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantItem
              key={restaurant.id}
              image={require('../assets/images/SliderHome/burger.jpg')}
              title={restaurant.name}
              shortDescription={restaurant.shortDescription}
              navigation={props.navigation}
              restaurant={restaurant}
              stars={restaurant.estrellas}
              reviews={restaurant.cantidadVotos}
            />
          );
        })}
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
