import React from 'react';
import {View, Text} from 'react-native';
import SliderHome from '../components/SliderHome';
import {primaryStyles} from '../styles/BasicStyles';
import {ScrollView} from 'react-native-gesture-handler';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {Header, Left, Right, Body, Button, Title} from 'native-base';

const Home = (props) => {
  return (
    <View style={primaryStyles.baseLayout}>
      <View style={primaryStyles.width}>
        <Header>
          <Left>
            <Button transparent>
              <IconAntDesign name="stepforward" size={30} color="#fff" />
            </Button>
          </Left>
          <Body>
            <Title style={{fontFamily: 'Poppins'}}>Header</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => props.navigation.navigate('Login')}>
              <IconAntDesign name="stepforward" size={30} color="#fff" />
            </Button>
          </Right>
        </Header>
      </View>

      <ScrollView
        style={primaryStyles.width}
        contentContainerStyle={primaryStyles.alignCenter}>
        <SliderHome />
        <SliderHome />
        <SliderHome />
        <SliderHome />
      </ScrollView>
    </View>
  );
};

export default Home;
