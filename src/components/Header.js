import React from 'react';
import styled from 'styled-components';
import { Image, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import SearchForm from './SearchForm';
import Button from './elements/Button';

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

const NavItem = styled(TouchableHighlight)`
  margin-horizontal: 10;
`;

const TextStyled = styled.Text`
  font-size: ${props => (props.onFocusText ? 40 : 18)};
  font-weight: 300;
  color: ${props => props.theme.textColor};
`;


const Profile = styled(TouchableHighlight)`
  margin-horizontal: 15;
  border-color: #fff;
  border-width: 2;
  border-radius: 100;
`;

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isFocusedText: '',
      isFocusedLogo: false
    };
  }


  onFocusText = (value) => {
    this.setState({ isFocusedText: value });
  }

  onBlurText = () => {
    this.setState({ isFocusedText: '' });
  }

  onFocusLogo = () => {
    this.setState({ isFocusedLogo: true });
    // console.log(this.state.isFocusedLogo);
  }

  onBlurLogo = () => {
    this.setState({ isFocusedLogo: false });
  }

  render() {
    const { navigation } = this.props;
    const { isFocusedText, isFocusedLogo } = this.state;
    return (
      <Container>
        <Button type="logo">
          <Image
            source={logo}
            style={{ height: 250, width: 250, resizeMode: 'contain' }}
          />
        </Button>
        <Navigation>
          <Button type="navItem">
            <TextStyled>HOME</TextStyled>
          </Button>
          <Button type="navItem">
            <TextStyled>MOVIES</TextStyled>
          </Button>
          <Button type="navItem">
            <TextStyled>SERIES</TextStyled>
          </Button>
        </Navigation>
        <SearchForm />
        <Profile
          onPress={() => navigation.navigate('Login')}
          onFocus={this.onFocusLogo}
          onBlur={this.onBlurText}
          hasTVPreferredFocus
        >
          <Image
            source={avatar}
            style={isFocusedLogo ? { height: 50, width: 50 } : { height: 35, width: 35 }}
          />
        </Profile>
      </Container>
    );
  }
}


export default withNavigation(Header);

// <NavItem onFocus={() => this.onFocusText('home')} onBlur={this.onBlurText} onPress={() => navigation.navigate('Dashboard')}>
// <TextStyled isFocusedText={isFocusedText === 'home'}>Home</TextStyled>
// </NavItem>
// <NavItem onFocus={() => this.onFocusText('videos')} onBlur={this.onBlurText}>
// <TextStyled isFocusedText={isFocusedText === 'videos'}>Videos</TextStyled>
// </NavItem>
// <NavItem onFocus={() => this.onFocusText('series')} onBlur={this.onBlurText}>
// <TextStyled isFocusedText={isFocusedText === 'series'}>Series</TextStyled>
// </NavItem>
// <NavItem onFocus={() => this.onFocusText('live-tv')} onBlur={this.onBlurText}>
// <TextStyled isFocusedText={isFocusedText === 'live-tv'}>Live TV</TextStyled>
// </NavItem>
