import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
  background-color: #ffffff;
  margin-top: 50;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: 5;
  margin-bottom: 5;
  font-size: 14;
`;

class VideoView extends Component {
  static navigationOptions = {
    title: 'Video view',
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <Container>
        <Image
          source={{ uri: item.Poster }}
          style={{ width: 150, height: 225 }}
        />
        <Title>
          {item.Title}

- (
          {item.Year}
)
        </Title>
      </Container>
    );
  }
}

export default withNavigation(VideoView);
