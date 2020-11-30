import React, {useContext} from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  DrawerToggler,
  Logout,
  UserAvatarButton,
} from './Header.styles';
import {AuthContext} from '../navigation/AuthProvider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
  const handleUserAvatarPressed = () => {
    props.navigation.openDrawer();
  };

  const {logout} = useContext(AuthContext);

  return (
    <HeaderContainer>
      <DrawerToggler onPress={() => handleUserAvatarPressed}>
        <FontAwesome name="bars" color={'#fff'} size={20} />
      </DrawerToggler>
      <HeaderTitle>USC Foods</HeaderTitle>
      <Logout onPress={() => logout()}>
        <FontAwesome name="power-off" color={'#fff'} size={20} />
      </Logout>
    </HeaderContainer>
  );
};

export default Header;
