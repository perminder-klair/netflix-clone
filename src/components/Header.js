import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import SearchForm from './SearchForm';

const avatar = require('../assets/avatar.png');
const logo = require('../assets/logo.png');

const Container = styled.View`
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  height: 60;
  position: absolute;
  z-index: 999;
  margin: 0;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.TouchableOpacity`

`;

const Navigation = styled.View`
  flex-grow: 1;
  flex-direction: row;
`;

const NavItem = styled.TouchableOpacity`
  margin-horizontal: 10;
`;

const TextStyled = styled.Text`
  font-size: 18;
  font-weight: 300;
  color: ${props => props.theme.textColor};
`;

const Right = styled.View``;

const Profile = styled.TouchableOpacity`
  margin-horizontal: 15;
  border-color: #fff;
  border-width: 2;
  border-radius: 100;
`;

export default props => (
  <Container>
    <Logo>
      <Image
        source={logo}
        style={{ height: 250, width: 250, resizeMode: 'contain' }}
      />
    </Logo>
    <Navigation>
      <NavItem><TextStyled>Home</TextStyled></NavItem>
      <NavItem><TextStyled>Videos</TextStyled></NavItem>
      <NavItem><TextStyled>Series</TextStyled></NavItem>
      <NavItem><TextStyled>Live TV</TextStyled></NavItem>
    </Navigation>
    <SearchForm />
    <Right>
      <Profile>
        <Image
          source={avatar}
          style={{ height: 35, width: 35 }}
          onPress={() => props.navigation.navigate('Video')}
        />
      </Profile>
    </Right>
  </Container>
);
