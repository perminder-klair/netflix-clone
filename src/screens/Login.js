import React from 'react';
import {
  Switch, View, Text, TextInput, Image
} from 'react-native';
import styled from 'styled-components';
import theme from '../utils/theme';

const logo = require('../assets/logo.png');

const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
  height: 100%;

`;
const Header = styled.View`
  width: 100%;
  padding-horizontal: 35;
  padding-vertical: 20;
`;

const Logo = styled.TouchableOpacity`

`;

const LogInWrapper = styled.View`
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  align-items:center;
`;
const LogInBox = styled.View`
  background-color: rgba(255,255,255,0.2);
  padding-vertical: 30;
  padding-horizontal: 30;
  width: 40%;
  border-width: 2;
  border-color: #92A8CA;
`;

const LogInTitle = styled.Text`
  color: #FFF;
  font-size: 22;
  margin-bottom: 30;
`;

const TextInputStyled = styled(TextInput)`
  height: 50;
  background-color: ${props => props.theme.primaryColor};
  margin-bottom: 25;
  color: ${props => props.theme.textColor};
  padding-left: 20;
  font-size: 12;
`;
const Button = styled.TouchableOpacity`
  color: #fff;
  background-color: #000;
  width: 100%;
  height: 50;
  justify-content: center;
  align-items: center;
  margin-top: 15;
`;

const ButtonTextStyled = styled.Text`
  color: ${props => props.theme.textColor};
`;
const NeedHelp = styled.Text`
  color: #fff;
  margin-top: 5;
  margin-bottom: 25;
  font-size: 10;
`;
const SignUp = styled.View`
flex-direction: row;
`;

const SignUpTitle = styled.Text`
  color: #9FB4DE;
  font-size: 10;
  margin-right: 5;
`;

const SignUpText = styled.Text`
  color:#fff;
  font-size: 10;
`;
export default class Login extends React.Component {
  static navigationOptions = {
    header: null

  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      password: ''
    };
  }

  render() {
    const { text, password } = this.state;
    return (
      <Container>

        <Header>
          <Logo>
            <Image
              source={logo}
              style={{ width: 250, resizeMode: 'contain' }}
            />
          </Logo>
        </Header>
        <LogInWrapper>
          <LogInBox>
            <LogInTitle>Log In</LogInTitle>
            <TextInputStyled
              style={{

              }}
              onChangeText={value => this.setState({ text: value })}
              value={text}
              placeholder="Email or phone number."
              placeholderTextColor="#9FB4DE"
            />
            <TextInputStyled
              style={{

              }}
              onChangeText={value => this.setState({ text: value })}
              value={password}
              placeholder="Password"
              placeholderTextColor="#9FB4DE"
            />
            <Button><ButtonTextStyled>Log In</ButtonTextStyled></Button>
            <NeedHelp>Need Help?</NeedHelp>
            <SignUp>
              <SignUpTitle>Don't have an account?</SignUpTitle>
              <SignUpText>Sign Up here.</SignUpText>
            </SignUp>
          </LogInBox>
        </LogInWrapper>

      </Container>
    );
  }
}
