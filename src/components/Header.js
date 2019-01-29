import React from 'react';
import styled from 'styled-components';
import { Image, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import SearchForm from './SearchForm';
import FocusableElement from './elements/FocusableElement';

const avatar = require('../assets/avatar.png');
const logo = require('../assets/logo.png');

const Container = styled.View`
  width: 100%;
  background-color: rgba(0,0,0,0);
  height: 60;
  position: absolute;
  z-index: 999;
  margin: 0;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
`;


const Navigation = styled.View`
  flex-grow: 1;
  flex-direction: row;
`;


const TextStyled = styled.Text`
  font-size: ${props => (props.onFocusText ? 40 : 18)};
  font-weight: 300;
  color: ${props => props.theme.textColor};
`;


class Header extends React.Component {
  state={

  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <View>
          <Image
            source={logo}
            style={{ height: 250, width: 250, resizeMode: 'contain' }}
          />
        </View>
        <Navigation>
          <FocusableElement type="navItem">
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <TextStyled>HOME</TextStyled>
            </TouchableOpacity>
          </FocusableElement>
          <FocusableElement type="navItem">
            <TextStyled>MOVIES</TextStyled>
          </FocusableElement>
          <FocusableElement type="navItem">
            <TextStyled>SERIES</TextStyled>
          </FocusableElement>

          <FocusableElement type="navItem">
            <TouchableOpacity onPress={() => navigation.navigate('Test')}>
              <TextStyled>TEST</TextStyled>
            </TouchableOpacity>
          </FocusableElement>

        </Navigation>

        <SearchForm />

        <FocusableElement
          onPress={() => navigation.navigate('Login')}
          type="profileLogo"
        >
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={avatar}
              style={{ height: 35, width: 35 }}
            />
          </TouchableOpacity>
        </FocusableElement>
      </Container>
    );
  }
}


export default withNavigation(Header);
