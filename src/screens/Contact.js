import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Header from '../components/Header';

const Contact = () => {
  return (
    <View>
      <Header />
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
          image={require('../assets/images/Contacto/marker-medium.png')}
          title={'Universidad Santiago de Cali'}
          description={`Calle 5 # 62-00, Barrio Pampalinda`}
        />
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
