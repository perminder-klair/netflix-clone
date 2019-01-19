import React from 'react';
import styled from 'styled-components';
import { Dimensions, Image } from 'react-native';
import FeaturedVideoInfo from './FeaturedVideoInfo';


const deviceHeight = Dimensions.get('window').height / 1.7;
const featuredImage = require('../assets/large-poster.png');

const Container = styled.View`
background-color: ${props => props.theme.primaryColor};
height: ${deviceHeight};
flex-direction: row;
`;

const ImageWrapper = styled.View`
  width: 60%;
`;

export default ({ item }) => (
  <Container>
    <FeaturedVideoInfo item={item} />
    <ImageWrapper>
      <Image
        source={featuredImage}
        style={{ width: '100%', height: '100%' }}
      />
    </ImageWrapper>
  </Container>
);
