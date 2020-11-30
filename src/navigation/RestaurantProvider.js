import React, {createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values';
import {v4 as uuid4} from 'uuid';
import storage from '@react-native-firebase/storage';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = async (restaurant, restaurantComplete) => {
    await firestore().collection('restaurantes').add(restaurant);
  };
  const uploadRestaurant = async (restaurant, onFoodUploaded, {updating}) => {
    if (restaurant.imageUrl) {
      try {
        const fileExtension = restaurant.imageUrl.uri.split('.').pop();
        var uuid = uuid4();
        const fileName = `${uuid}.${fileExtension}`;
        var storageRef = storage().ref(`restaurantes/imagenes/${fileName}`);
        await storageRef.putFile(restaurant.imageUrl.uri);
        const downloadUrl = await storageRef.getDownloadURL();
        restaurant.imageUrl = downloadUrl;
        addRestaurant(restaurant, null);
      } catch (error) {
        return;
      }
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        getAllRestaurants: async () => {
          try {
            function onResult(QuerySnapshot) {
              const array = QuerySnapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()};
              });
              setRestaurants(array);
            }

            function onError(error) {
              console.error(error.message);
            }
            await firestore()
              .collection('restaurantes')
              .onSnapshot(onResult, onError);
          } catch (error) {
            console.log(error.message);
          }
        },
        addRestaurant,
        uploadRestaurant,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
