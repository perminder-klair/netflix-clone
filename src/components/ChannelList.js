import React from 'react';
import styled from 'styled-components';
import {
  Dimensions, FlatList
} from 'react-native';

const { height } = Dimensions.get('window');

const channels = [
  'Channel One',
  'Channel Two',
  'Channel Three',
  'Channel Four',
  'Channel Five',
  'Channel Six',
  'Channel Seven',
  'Channel Eight',
  'Channel Nine',
  'Channel Ten',
  'Channel Eleven',
  'Channel Twelve'
];


const ListItem = styled.TouchableOpacity`
  border-color: rgba(255,255,255,0.9);
  border-width: 3;
  border-top-width: 0;
  padding-vertical: ${height / 30};
  padding-horizontal: 15;
`;

const TextStyled = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: 600;
  font-size: 18;
`;

export default () => (
  <FlatList

    data={channels}
    renderItem={({ item, index }) => (
      <ListItem key={index}>
        <TextStyled>
          {`${index + 1}.  `}
          {item}
        </TextStyled>
      </ListItem>
    )}
  />
);
