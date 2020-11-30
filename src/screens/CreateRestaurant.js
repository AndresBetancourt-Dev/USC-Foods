import React, {useState, useCallback} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';

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
    productos: [],
    estrellas: '',
  });

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
    }
    setRestaurant({
      ...restaurant,
      estrellas: parseInt(stars),
      cantidadVotos: 1,
      votos: [parseInt(stars)],
    });
  });

  const handleSubmit = () => {
    console.log(restaurant);
  };

  return (
    <View>
      <Header props={props} />
      <ScrollView style={styles.formWrapper}>
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
            onChangeText={(descripcion) => {
              setRestaurant({...restaurant, descripcion: descripcion});
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
    marginVertical: 50,
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
});
