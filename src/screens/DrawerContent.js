import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../navigation/AuthProvider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export function DrawerContent(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00b3ff',
        width: '100%',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/images/Main/usc-food-logo.png')}
        style={{width: 200, height: 200}}
      />
      <Text
        style={{color: 'white', fontFamily: 'Poppins-ExtraBold', fontSize: 20}}>
        USC Foods
      </Text>
      <Drawer.Section style={{width: '80%', height: 200}}>
        <DrawerItem
          icon={() => <FontAwesome name="home" size={20} color={'#00b3ff'} />}
          label={'Home'}
          style={{color: '#00b3ff', backgroundColor: 'white'}}
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          icon={() => <FontAwesome5 name="hotel" size={20} color={'#00b3ff'} />}
          label={'Admin'}
          style={{color: '#00b3ff', backgroundColor: 'white'}}
          onPress={() => props.navigation.navigate('Admin')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
