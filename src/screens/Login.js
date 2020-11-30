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
    marginVertical: 20,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      ToastAndroid.show(
        'Debe ingresar su correo y su contraseña',
        ToastAndroid.SHORT,
      );
      return;
    }
    login(email, password);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/Main/usc-food-logo.png')}
      />
      <Text style={styles.text}>USC Foods</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => {
          setEmail(userEmail);
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
        }}
        placeholderText="Contraseña"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Login"
        onPress={() => handleLogin()}></FormButton>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          ToastAndroid.show(
            'Función no disponible actualmente',
            ToastAndroid.SHORT,
          );
        }}>
        <Text style={styles.navButtonText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <SocialButton
        buttonTitle="Facebook"
        buttonType="facebook"
        color="#fff"
        bgColor="#4867aa"
        onPress={() => {
          ToastAndroid.show(
            'Función no disponible actualmente',
            ToastAndroid.SHORT,
          );
        }}
      />

      <SocialButton
        buttonTitle="Google"
        buttonType="google"
        color="#fff"
        bgColor="#de4f41"
        onPress={() => {
          ToastAndroid.show(
            'Función no disponible actualmente',
            ToastAndroid.SHORT,
          );
        }}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text style={styles.navButtonText}>
          ¿No tienes una cuenta? Creala aquí
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
