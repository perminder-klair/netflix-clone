import React from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components';

const { width, height } = Dimensions.get('window');

const KeyBoard = styled.View`
  background-color: rgba(0,0,0,0.8);
  height: ${height / 2};
  width: ${width / 4};
  border-radius: 10;
  border-width: 3;
  border-color: rgba(255,255,255,0.8);
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10;
`;

const KeyWrapper = styled.TouchableOpacity`
  border-width: 1;
  border-color: #fff;
  width: 33.333333%;
  justify-content: center;
  align-items: center;
  height: 25%;
`;

const KeyStyled = styled.Text`
  text-align: center;
  color: ${props => props.theme.textColor};
  font-size: 18;
  font-weight: 600;
`;

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0', 'X'];

export default () => (
  <KeyBoard>
    {keys.map(keyItem => (
      <KeyWrapper key={keyItem}>
        <KeyStyled>{keyItem}</KeyStyled>
      </KeyWrapper>
    ))}
  </KeyBoard>
);
