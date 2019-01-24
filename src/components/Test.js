import React from 'react';
import styled from 'styled-components';
import { ScrollView, Dimensions } from 'react-native';
// import Card from './Card';

// import { hollywood } from '../utils/api';

const deviceWidth = Dimensions.get('window').width / 3;
// const featuredImage = require('../assets/large-poster.png');

// const Container = styled.View`
//   justify-content: space-between;
//   align-items: flex-start;
//   flex-direction: row;
// `;

const Blue = styled.View`
  background-color: blue;
  width: ${deviceWidth};
  height: 100;
`;

const Red = styled.View`
  background-color: red;
  width: ${deviceWidth};
  height: 100;
`;

const Green = styled.View`
  background-color: green;
  width: ${deviceWidth};
  height: 100;
`;

export default () => (
  <ScrollView
    horizontal
  >
    <Blue />
    <Green />
    <Red />
    <Green />
  </ScrollView>
);
