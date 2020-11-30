import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import StarRating from '../components/StarRating';
import {RestaurantTitle} from './RestauranteItem.styles';

const RestaurantItem = (props) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          props.navigation.navigate('Details', {
            restaurant: props.restaurant,
            image: props.image,
          })
        }>
        <View style={styles.cardImgWrapper}>
          <Image
            source={props.image}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <RestaurantTitle style={styles.cardTitle}>
            {props.title}
          </RestaurantTitle>
          <StarRating ratings={props.stars} reviews={props.reviews} size={15} />
          <Text style={styles.cardDetails}>{props.shortDescription}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    display: 'flex',
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#00b3ff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
