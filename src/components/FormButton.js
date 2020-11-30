import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimensiones';
const FormButton = ({
  buttonTitle,
  width,
  color,
  backgroundColor,
  optionalStyles,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
        marginTop: 10,
        width: width || '100%',
        height: windowHeight / 15,
        backgroundColor: backgroundColor || '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        ...optionalStyles,
      }}
      {...rest}>
      <Text
        style={{
          fontSize: 18,
          color: color || '#00b3ff',
          fontFamily: 'Poppins-ExtraBold',
        }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#00b3ff',
    fontFamily: 'Poppins-ExtraBold',
  },
});
