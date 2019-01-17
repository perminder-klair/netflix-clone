import React from 'react';
import styled from 'styled-components';
import { Dimensions, Image, Text } from 'react-native';

const deviceHeight = Dimensions.get('window').height / 1.7;
const featuredImage = require('../assets/large-poster.png');

const Container = styled.View`
background-color: #004f93;
height: ${deviceHeight};
flex-direction: row;
`;

const InfoWrapper = styled.View`
  width: 40%;
`;

const Info = styled.View`
   justify-content: center;
   flex-grow: 5;
`;

const Title = styled.Text`

`;

const UploadTime = styled.Text`

`;

const Description = styled.Text`

`;

const Footer = styled.View`
flex-grow: 1;
flex-direction: row;
justify-content: space-between;
`;

const Button = styled.View`
`;

const Duration = styled.Text`
`;

const ImageWrapper = styled.View`
width: 60%
`;

export default () => (
  <Container>
    <InfoWrapper>
      <Info>
        <Title>Gravity</Title>
        <UploadTime>9 months ago</UploadTime>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam labore accusantium dignissimos neque. Impedit recusandae illo doloremque earum aperiam autem laboriosam distinctio est odit. Eius culpa cupiditate atque qui doloribus.</Description>
      </Info>
      <Footer>
        <Button><Text>Add to List</Text></Button>
        <Duration>1h 30min</Duration>
      </Footer>
    </InfoWrapper>

    <ImageWrapper>
      <Image
        source={featuredImage}
        style={{ width: '100%', height: '100%' }}
      />
    </ImageWrapper>
  </Container>
);
