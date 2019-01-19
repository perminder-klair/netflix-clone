import React from 'react';
import styled from 'styled-components';
import { Dimensions, Image } from 'react-native';

const deviceHeight = Dimensions.get('window').height / 1.75;
const featuredImage = require('../assets/large-poster.png');

const Container = styled.View`
background-color: ${props => props.theme.primaryColor};
height: ${deviceHeight};
`;

export default () => (
  <Container>
    <Image
      source={featuredImage}
      style={{ width: '100%', height: '100%' }}
    />
  </Container>
);
