import React from 'react';
import styled from 'styled-components';
import { Image, View } from 'react-native';


const playBtn = require('../assets/play-btn.png');

const InfoWrapper = styled.View`
  width: 40%;
  margin-horizontal: 20;
`;

const Info = styled.View`
   justify-content: center;
   flex-grow: 5;
`;

const Top = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 22;
  color: ${props => props.theme.textColor};
  font-weight: bold;
`;

const UploadTime = styled.Text`
  font-size: 14;
  color: ${props => props.theme.textColor};
  opacity: 0.7;
`;

const PlayBtn = styled.TouchableOpacity`
  margin-left: 10;
`;

const Description = styled.Text`
  font-size: 14;
  color: ${props => props.theme.textColor};
  opacity: 0.9;
  margin-top: 10;
`;

const Footer = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
 background-color: #000;
 border-radius: 2;
 padding-vertical: 5;
 padding-horizontal: 10;
 align-items: center;
`;

const ButtonTextStyled = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: 100;
`;

const Duration = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;


export default ({ item }) => (
  <InfoWrapper>
    <Info>
      <Top>
        <View>
          <Title>{item.Title}</Title>
          <UploadTime>{item.Year}</UploadTime>
        </View>
        <PlayBtn>
          <Image
            source={playBtn}
            style={{ width: 50, height: 50 }}
          />
        </PlayBtn>
      </Top>
      <Description>
        Dr Ryan Stone, an engineer on her first time on a space mission,
        and Matt Kowalski, an astronaut on his final expedition, have to
        survive in space after they are hit by debris while spacewalking.
      </Description>
    </Info>
    <Footer>
      <Button><ButtonTextStyled>ADD TO LIST</ButtonTextStyled></Button>
      <Duration>1h 30min</Duration>
    </Footer>
  </InfoWrapper>
);
