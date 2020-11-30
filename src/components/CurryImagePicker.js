import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  Alert,
  ToastAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FormButton from '../components/FormButton';

const CurryImagePicker = ({image, onImagePicked}) => {
  const [selectedImage, setSelectedImage] = useState();
  useEffect(() => {
    if (image) {
      setSelectedImage(image);
    }
  }, []);

  const handleImagePicked = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecciona una imagen',
        maxWidth: 800,
        maxHeight: 800,
      },
      (response) => {
        if (response.error) {
          ToastAndroid.show(
            'Lo sentimos, la imagen no pudo ser subida',
            ToastAndroid.SHORT,
          );
        } else {
          if (response.path === undefined) {
            ToastAndroid.show(
              'No has seleccionado una imagen',
              ToastAndroid.SHORT,
            );
          } else {
            setSelectedImage({uri: 'file://' + response.path});
            onImagePicked({uri: 'file://' + response.path});
            ToastAndroid.show('Imagen Subida Exitosamente', ToastAndroid.SHORT);
          }
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={selectedImage} />
      </View>
      <View style={{marginTop: 20}}>
        <FormButton buttonTitle={'Subir Imagen'} onPress={handleImagePicked} />
      </View>
    </View>
  );
};

export default CurryImagePicker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
