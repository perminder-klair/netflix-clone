import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
var TVEventHandler = require('TVEventHandler');

import { bollywood, hollywood, punjabi } from '../utils/api';
import Card from '../components/Card';

const Wrapper = styled.View`
  background-color: #ffffff;
  margin-top: 50;
`;

const Columns = styled.View`
  display: flex;
  flex-direction: row;
  margin-vertical: 8;
  margin-horizontal: 8;
`;

export default class Dashboard extends Component {
  _tvEventHandler;

  static navigationOptions = {
    title: 'Welcome',
  };

  componentDidMount() {
    this.enableTVEventHandler();
  }

  componentWillUnmount() {
    this.disableTVEventHandler();
  }

  enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function(cmp, evt) {
      if (evt && evt.eventType === 'right') {
        console.log('right');
      } else if(evt && evt.eventType === 'up') {
        console.log('up');
      } else if(evt && evt.eventType === 'left') {
        console.log('left');
      } else if(evt && evt.eventType === 'down') {
        console.log('down');
      } else if(evt && evt.eventType === 'playPause') {
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
      <ScrollView>
        <Wrapper>
          <Columns>
            <Text>Hollywood</Text>
          </Columns>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {hollywood.map(item => (
              <Card key={item.imdbID} item={item} />
            ))}
          </ScrollView>

          <Columns>
            <Text>Bollywood</Text>
          </Columns>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {bollywood.map(item => (
              <Card key={item.imdbID} item={item} />
            ))}
          </ScrollView>

          <Columns>
            <Text>Punjabi</Text>
          </Columns>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {punjabi.map(item => (
              <Card key={item.imdbID} item={item} />
            ))}
          </ScrollView>

        </Wrapper>
      </ScrollView>
    );
  }
}