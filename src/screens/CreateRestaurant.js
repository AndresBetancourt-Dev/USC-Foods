import React, {useState, useCallback, useContext} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import {RestaurantContext} from '../navigation/RestaurantProvider';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {HeaderTitle} from '../components/Text.styles';
import CurryImagePicker from '../components/CurryImagePicker';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

const CreateRestaurant = (props) => {
  const [restaurant, setRestaurant] = useState({
    imageUrl: {
      uri: null,
    },
    name: '',
    shortDescription: '',
    longDescription: '',
    address: '',
    telephone: '',
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    products: [],
    stars: 0,
    phone: '',
  });

  const {uploadRestaurant} = useContext(RestaurantContext);

  const setRestaurantImage = (image) => {
    setRestaurant({
      ...restaurant,
      imageUrl: image,
    });
  };

  const setStars = useCallback((stars) => {
    if (stars < 1 || stars > 5) {
      ToastAndroid.show(
        'Debes digitar un valor entre 1 y 5',
        ToastAndroid.SHORT,
      );
    } else {
      setRestaurant({
        ...restaurant,
        stars: parseInt(stars),
        quantityVotes: 1,
        votes: [parseInt(stars)],
      });
    }
  });

  const handleSubmit = async () => {
    await uploadRestaurant(restaurant, null, {updating: false});
    props.navigation.navigate('Home');
  };

  return (
    <View>
      <Header props={props} />
      <ScrollView
        style={styles.formWrapper}
        contentContainerStyle={styles.formWrapperContainer}>
        <HeaderTitle>Crear restaurante</HeaderTitle>
        <CurryImagePicker
          image={restaurant.imageUrl}
          onImagePicked={setRestaurantImage}
        />
        <View style={styles.action}>
          <FormInput
            labelValue={restaurant.name}
            onChangeText={(name) => {
              setRestaurant({...restaurant, name: name});
            }}
            iconType="font"
            placeholderText="Nombre del Restaurante"
            keyboardType="email-address"
            autoCapitalize="none"
            width={'80%'}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FormInput
            labelValue={restaurant.shortDescription}
            onChangeText={(shortDescription) => {
              setRestaurant({
                ...restaurant,
                shortDescription: shortDescription,
              });
            }}
            width={'80%'}
            iconType="align-right"
            placeholderText="Descripción Corta"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FormInput
            labelValue={restaurant.descripcion}
            onChangeText={(longDescription) => {
              setRestaurant({...restaurant, longDescription: longDescription});
            }}
            width={'80%'}
            iconType="align-justify"
            placeholderText="Descripción"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FormInput
            onChangeText={setStars}
            iconType="star"
            placeholderText="Estrellas"
            keyboardType="numeric"
            autoCapitalize="none"
            width={'80%'}
            autoCorrect={false}
          />
        </View>

        <View style={styles.action}>
          <FormInput
            labelValue={restaurant.descripcion}
            onChangeText={(address) => {
              setRestaurant({...restaurant, address: address});
            }}
            iconType="map-marker"
            placeholderText="Dirección"
            keyboardType="email-address"
            autoCapitalize="none"
            width={'80%'}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FormInput
            labelValue={restaurant.descripcion}
            onChangeText={(phone) => {
              setRestaurant({...restaurant, phone: phone});
            }}
            iconType="phone"
            placeholderText="Teléfono"
            keyboardType="numeric"
            autoCapitalize="none"
            width={'80%'}
            autoCorrect={false}
          />
        </View>
        <View style={styles.action}>
          <FormInput
            labelValue={restaurant.coordinates.latitude.toString()}
            onChangeText={(address) => {
              setRestaurant({...restaurant, address: address});
            }}
            iconType="map-marker"
            placeholderText="Latitud"
            keyboardType="email-address"
            autoCapitalize="none"
            width={'40%'}
            autoCorrect={false}
            editable={false}
          />
          <FormInput
            labelValue={restaurant.coordinates.longitude.toString()}
            iconType="map-marker"
            placeholderText="Longitud"
            keyboardType="email-address"
            autoCapitalize="none"
            width={'40%'}
            autoCorrect={false}
            editable={false}
          />
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          mapType={'standard'}
          onPress={(event) => {
            setRestaurant({
              ...restaurant,
              coordinates: {
                latitude: event.nativeEvent.coordinate.latitude,
                longitude: event.nativeEvent.coordinate.longitude,
              },
            });
          }}
          region={{
            latitude: 3.4027650132192724,
            longitude: -76.54829745635273,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: restaurant.coordinates.latitude || 3.4027650132192724,
              longitude: restaurant.coordinates.longitude || -76.54829745635273,
            }}
            image={require('../assets/images/Contacto/marker-medium.png')}
            title={restaurant.name || 'Universidad Santiago de Cali'}
            description={
              restaurant.address || `Calle 5 # 62-00, Barrio Pampalinda`
            }
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <FormButton
            buttonTitle="Enviar"
            color={'white'}
            backgroundColor={'#00b3ff'}
            width="80%"
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateRestaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  formWrapper: {
    marginTop: 20,
    marginBottom: 55,
  },
  formWrapperContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },

  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  text: {
    borderWidth: 1,
    borderColor: '#FFF',
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    justifyContent: 'center',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  buttonContainer: {
    width: '100%',
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '80%',
    borderRadius: 20,
  },
});
