import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {windowHeight, windowWidth} from '../utils/Dimensiones';

const FormInput = ({iconType, labelValue, placeholderText, width, ...rest}) => {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 10,
        width: width || '100%',
        height: windowHeight / 15,
        borderColor: '#00b3ff',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={styles.iconStyle}>
        <FontAwesome name={iconType} size={25} color={'#00b3ff'} />
      </View>
      <TextInput
        style={styles.input}
        numberOfLines={1}
        value={labelValue}
        placeholder={placeholderText}
        placeholderTextColor="#00b3ff"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainter: {},
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#00b3ff',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#00b3ff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
