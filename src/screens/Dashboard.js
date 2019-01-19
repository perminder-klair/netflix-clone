import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import HeroArea from '../components/HeroArea';
import { bollywood, hollywood, punjabi } from '../utils/api';
import Card from '../components/Card';


// eslint-disable-next-line import/no-unresolved
const TVEventHandler = require('TVEventHandler');

const Container = styled.View`
  background-color: ${props => props.theme.primaryColor};
`;

const Wrapper = styled.View`
  background-color: ${props => props.theme.primaryColor};

`;

const CardsWrapper = styled.View`
  margin-top: 10;
  margin-horizontal: 20;
`;

const Columns = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25;
  margin-bottom: 8;
  margin-horizontal: 8;
`;


const HeadingStyled = styled.Text`
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
          <HeroArea />
          <Wrapper>
            <CardsWrapper>
              <Columns>
                <HeadingStyled>Recent Videos</HeadingStyled>
              </Columns>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                {hollywood.map(item => (
                  <Card key={item.imdbID} item={item} />
                ))}
              </ScrollView>

              <Columns>
                <HeadingStyled>Most Viewed Videos</HeadingStyled>
              </Columns>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                {bollywood.map(item => (
                  <Card key={item.imdbID} item={item} />
                ))}
              </ScrollView>

              <Columns>
                <HeadingStyled>Playlists</HeadingStyled>
              </Columns>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
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
