import React from 'react';
import {
  Image, Dimensions, ScrollView, FlatList
} from 'react-native';
import styled from 'styled-components';

const featuredImage = require('../assets/large-poster.png');

const { width, height } = Dimensions.get('window');

const VideoWrapper = styled.View`
  position: relative;
`;

const Left = styled.View`
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  width: ${width / 3};
  height: ${height};
  border-color: transparent;
  border-width: 3;
  max-height: ${height};
`;

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

class Test extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <React.Fragment>
        <VideoWrapper>
          <Image
            source={featuredImage}
            style={{ width, height }}
          />
        </VideoWrapper>
        <Left>

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

        </Left>
      </React.Fragment>
    );
  }
}

export default Test;
