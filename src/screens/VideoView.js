import React, { Component } from 'react';
import styled from 'styled-components/native';
// import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import VideoViewHero from '../components/VideoViewHero';
import RelatedVideos from '../components/RelatedVideos';
// import Test from '../components/Test';

// const featuredImage = require('../assets/large-poster.png');

const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
`;

// const Title = styled.Text`
//   text-align: center;
//   margin-top: 5;
//   margin-bottom: 5;
//   font-size: 14;
// `;

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
        <ScrollView>
          <VideoViewHero item={item} />
          {/*
        {item.Title}

- (
        {item.Year}
)
*/}
          <RelatedVideos />

        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(VideoView);
