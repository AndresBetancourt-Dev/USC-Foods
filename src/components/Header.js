import React from 'react';
import {
  HeaderContainer,
  UserAvatar,
  UserAdress,
  Cupon,
  UserAvatarButton,
} from './Header.styles';

const Header = (props) => {

  const handleUserAvatarPressed = () => {
    props.navigation.openDrawer();
  };

  return (
    <HeaderContainer>
      <UserAvatarButton onPress={handleUserAvatarPressed}>
    
        <UserAvatar   / >
      </UserAvatarButton>
      <UserAdress> </UserAdress>
      <Cupon>Buscar</Cupon>
    </HeaderContainer>
  );
};

export default Header;
