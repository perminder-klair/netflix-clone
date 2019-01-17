import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import FeaturedVideo from '../components/FeaturedVideo';

const featuredImage = require('../assets/large-poster.png');

const Container = styled.View`
  background-color: #004f93;

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
    headerStyle: {
      display: 'none'
    }
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <Container>
        <FeaturedVideo />
        {/*
        {item.Title}

- (
        {item.Year}
)
*/}
      </Container>
    );
  }
}

export default withNavigation(VideoView);
