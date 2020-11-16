import {Toast} from 'native-base';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b3ff',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Poppins-ExtraBold',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email === '' || password === '') {
      ToastAndroid.show(
        'Debe ingresar su correo y su contraseña',
        ToastAndroid.SHORT,
      );
      return;
    }

    if (password.length < 6) {
      ToastAndroid.show(
        'La contraseña debe tener mínimo 6 caracteres',
        ToastAndroid.SHORT,
      );
      return;
    }

    if (confirmPassword === '') {
      ToastAndroid.show(
        'Por favor digite la confirmación de la contraseña',
        ToastAndroid.SHORT,
      );
      return;
    }

    if (confirmPassword !== password) {
      ToastAndroid.show('Las contraseñas no coinciden', ToastAndroid.SHORT);
      return;
    }
    register(email, password);
  };

  const {register} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crea una Cuenta</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => {
          setEmail(userEmail);
          console.log(email);
        }}
        iconType="user"
        placeholderText="Usuario"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        iconType="lock"
        onChangeText={(userPassword) => {
          setPassword(userPassword);
          console.log(password);
        }}
        placeholderText="Contraseña"
        secureTextEntry={true}
      />
      <FormInput
        iconType="lock"
        onChangeText={(userPassword) => {
          setConfirmPassword(userPassword);
          console.log(confirmPassword);
        }}
        placeholderText="Confirmar Contraseña"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => handleRegister()}></FormButton>

      <SocialButton
        buttonTitle="Facebook"
        buttonType="facebook"
        color="#fff"
        bgColor="#4867aa"
        onPress={() => {
          console.log('facebook');
        }}
      />

      <SocialButton
        buttonTitle="Google"
        buttonType="google"
        color="#fff"
        bgColor="#de4f41"
        onPress={() => {
          console.log('google');
        }}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.navButtonText}>
          ¿Tienes una cuenta? ¡Ingresa aquí!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
