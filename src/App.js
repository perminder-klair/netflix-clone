import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

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