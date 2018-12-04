import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
var TVEventHandler = require('TVEventHandler');

import Card from './components/Card';

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

export default class App extends Component {
  _tvEventHandler;

  enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function(cmp, evt) {
      if (evt && evt.eventType === 'right') {
        cmp.setState({board: cmp.state.board.move(2)});
      } else if(evt && evt.eventType === 'up') {
        cmp.setState({board: cmp.state.board.move(1)});
      } else if(evt && evt.eventType === 'left') {
        cmp.setState({board: cmp.state.board.move(0)});
      } else if(evt && evt.eventType === 'down') {
        cmp.setState({board: cmp.state.board.move(3)});
      } else if(evt && evt.eventType === 'playPause') {
        cmp.restartGame();
      }
    });
  }

  componentDidMount() {
    this.enableTVEventHandler();
  }

  render() {
    return (
      <ScrollView>
        <Wrapper>
          <Columns>
            <Text>List of Movies</Text>
          </Columns>
          <ScrollView horizontal>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
          </ScrollView>
          <ScrollView horizontal>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
            <Columns>
              <Card />
            </Columns>
          </ScrollView>
        </Wrapper>
      </ScrollView>
    );
  }
}