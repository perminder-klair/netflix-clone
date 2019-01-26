import React, { Component } from 'react';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import VideoViewHero from '../components/VideoViewHero';
import RelatedVideos from '../components/RelatedVideos';

const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
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
        <ScrollView>
          <VideoViewHero item={item} />
          <RelatedVideos />
        </ScrollView>
      </Container>
    );
  }
}

export default withNavigation(VideoView);
