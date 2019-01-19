import React from 'react';
import styled from 'styled-components';
import { ScrollView, Dimensions } from 'react-native';
import Card from './Card';

import { hollywood } from '../utils/api';

const deviceWidth = Dimensions.get('window').width / 3;
// const featuredImage = require('../assets/large-poster.png');

const Container = styled.View`
  padding-bottom: 100;
  margin-horizontal: 20;
`;

const Columns = styled.View`
  margin-top: 25;
  margin-bottom: 8;
  margin-horizontal: 8;
  align-items: center;
`;

const HeadingStyled = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: bold;
  font-size: 22;
`;

export default () => (
  <Container>
    <Columns>
      <HeadingStyled>Related Videos</HeadingStyled>
    </Columns>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
      {hollywood.map(item => (
        <Card key={item.imdbID} item={item} type="secondary" />
      ))}
    </ScrollView>
  </Container>
);
