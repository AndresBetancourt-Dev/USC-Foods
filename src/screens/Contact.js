import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Header from '../components/Header';
import {RestaurantContext} from '../navigation/RestaurantProvider';

const Contact = (props) => {
  const {getAllRestaurants, restaurants} = useContext(RestaurantContext);

  useEffect(() => {
    getAllRestaurants();
  }, []);
  return (
    <View>
      <Header props={props} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapType={'standard'}
        region={{
          latitude: 3.4027650132192724,
          longitude: -76.54829745635273,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 3.4027650132192724,
            longitude: -76.54829745635273,
          }}
          image={require('../assets/images/Contacto/marker-medium-short.png')}
          title={'Universidad Santiago de Cali'}
          description={`Calle 5 # 62-00, Barrio Pampalinda`}
        />
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            coordinate={{
              latitude: restaurant.coordinates.latitude,
              longitude: restaurant.coordinates.longitude,
            }}
            image={require('../assets/images/Contacto/marker-medium-short.png')}
            title={restaurant.name}
            description={restaurant.address}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
