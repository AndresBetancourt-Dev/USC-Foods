import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  DrawerToggler,
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
      <DrawerToggler />
      <HeaderTitle>USC Foods</HeaderTitle>
      <UserAvatarButton onPress={handleUserAvatarPressed} />
    </HeaderContainer>
  );
};

export default Header;
