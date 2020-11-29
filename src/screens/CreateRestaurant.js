import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TabBarIOSItem} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput} from 'react-native-paper';
import Header from '../components/Header';



import FontAwesome from 'react-native-vector-icons/FontAwesome';




const CreateRestaurant = () => {

  return (

    
    <View>
      <Header />
      <ScrollView style={styles.cardsWrapper}>
      <Text style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Poppins-ExtraBold',
            marginVertical: 10,

          }}>
          Crear restaurante</Text>
      
          <View style={styles.action}>
          <FontAwesome name="shopping-basket"    size={20} />
          <TextInput
            placeholder="Nombre del restaurante"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
               
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="product-hunt"  size={20} />
          <TextInput
            placeholder="Nombre del Producto"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
            
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone-square"  size={20} />
          <TextInput
            placeholder="Telefono"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
               
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o"  size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
             
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="map-marker"  size={20} />
          <TextInput
            placeholder="Dirrecion"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
               
              },
            ]}
          />
        </View>

        <View style={styles.cardsWrapper}>

        <Text style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Poppins-ExtraBold',
            marginVertical: 10,

          }}>
             Tomar foto del producto</Text>
             
          <View style={{
           alignSelf: 'center',
           marginTop: 20,
           width: 40,
           height: 100,
          }}>
          <FontAwesome name="camera"  size={20} />

            

        </View>
        </View>
        
        <View style={styles.buttonContainer}>
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
        paddingBottom: 5
},
actionError: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},




});