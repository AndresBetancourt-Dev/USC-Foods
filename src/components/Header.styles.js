import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: #fff;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Poppins-ExtraBold';
  font-size: 20px;
  color: #00b3ff;
`;

export const DrawerToggler = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #00b3ff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logout = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #a00;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserAdress = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 16px;
`;

export const Cupon = styled.Text`
  font-size: 14px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;
