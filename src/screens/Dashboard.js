import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import HeroArea from '../components/HeroArea';
import { bollywood, hollywood, punjabi } from '../utils/api';
import Card from '../components/Card';


const TVEventHandler = require('TVEventHandler');

const Container = styled.View`
  background-color: #004f93;
`;

const Wrapper = styled.View`
  background-color: #004f93;

`;

const CardsWrapper = styled.View`
  margin-top: 10;
  margin-horizontal: 20;
`;

const Columns = styled.View`
  display: flex;
  flex-direction: row;
  margin-vertical: 8;
  margin-horizontal: 8;
`;


const HeadingStyled = styled(Text)`
  color: #fff;
  font-size: 18;
`;
export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'CLIPBUCKET',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount() {
    this.enableTVEventHandler();
  }

  componentWillUnmount() {
    this.disableTVEventHandler();
  }

  _tvEventHandler;

  enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
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

  disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <HeroArea />
          <Wrapper>
            <CardsWrapper>
              <Columns>
                <HeadingStyled>Recent Videos</HeadingStyled>
              </Columns>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {hollywood.map(item => (
                  <Card key={item.imdbID} item={item} />
                ))}
              </ScrollView>

              <Columns>
                <HeadingStyled>Most Viewed Videos</HeadingStyled>
              </Columns>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {bollywood.map(item => (
                  <Card key={item.imdbID} item={item} />
                ))}
              </ScrollView>

              <Columns>
                <HeadingStyled>Playlists</HeadingStyled>
              </Columns>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {punjabi.map(item => (
                  <Card key={item.imdbID} item={item} />
                ))}
              </ScrollView>
            </CardsWrapper>

          </Wrapper>
        </ScrollView>
      </Container>
    );
  }
}
