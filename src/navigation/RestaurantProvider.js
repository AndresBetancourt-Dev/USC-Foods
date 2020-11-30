import React, {createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
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
              console.error(error);
            }
            await firestore()
              .collection('restaurantes')
              .onSnapshot(onResult, onError);
          } catch (error) {
            console.log(error.message);
          }
        },
        addRestaurant: async (restaurant, restaurantComplete) => {
          restaurant.createdAt = firestore()
            .collection('restaurantes')
            .add(restaurant);
        },
        uploadRestaurant(food, onFoodUploaded, {updating}) {
          if (food.imageUrl) {
            const fileExtension = food.imageUrl.uri.split('.').pop();
            console.log(fileExtension);
          }
        },
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
