import React, {useContext, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import RestaurantItem from '../components/RestaurantItem';
import {RestaurantContext} from '../navigation/RestaurantProvider';

const Restaurantes = (props) => {
  const {getAllRestaurants, restaurants} = useContext(RestaurantContext);
  const handleClick = () => {
    console.log('clikc');
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);
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
        {restaurants.map((restaurant) => {
          return (
            <RestaurantItem
              key={restaurant.id}
              image={require('../assets/images/SliderHome/burger.jpg')}
              title={restaurant.name}
              shortDescription={restaurant.shortDescription}
              navigation={props.navigation}
              restaurant={restaurant}
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
