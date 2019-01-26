import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import HeroArea from '../components/HeroArea';
import { bollywood, hollywood, punjabi } from '../utils/api';
import VideoList from '../components/VideoList';
import Header from '../components/Header';
// eslint-disable-next-line import/no-unresolved
const TVEventHandler = require('TVEventHandler');

const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
`;

const VideosWrapper = styled.View`
  background-color: ${props => props.theme.primaryColor};
  margin-top: 10;
  margin-horizontal: 20;
`;
export default class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.enableTVEventHandler();
  }

  componentWillUnmount() {
    this.disableTVEventHandler();
  }

  _tvEventHandler;

  enableTVEventHandler() {
    // eslint-disable-next-line no-underscore-dangle
    this._tvEventHandler = new TVEventHandler();
    // eslint-disable-next-line no-underscore-dangle
    this._tvEventHandler.enable(this, (cmp, evt) => {
      if (evt && evt.eventType === 'right') {
        console.log('right');
      } else if (evt && evt.eventType === 'up') {
        console.log('up');
      } else if (evt && evt.eventType === 'left') {
        console.log('left');
      } else if (evt && evt.eventType === 'down') {
        console.log('down');
      } else if (evt && evt.eventType === 'playPause') {
        console.log('playPause');
      }
    });
  }

  disableTVEventHandler() { // eslint-disable-next-line no-underscore-dangle
    if (this._tvEventHandler) { // eslint-disable-next-line no-underscore-dangle
      this._tvEventHandler.disable(); // eslint-disable-next-line no-underscore-dangle
      delete this._tvEventHandler;
    }
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <Header />
          <HeroArea />
          <VideosWrapper>
            <VideoList title="Recent Videos" videos={bollywood} />
            <VideoList title="Most Viewed Videos" videos={hollywood} />
            <VideoList title="Playlists" videos={punjabi} />
          </VideosWrapper>
        </ScrollView>
      </Container>
    );
  }
}
