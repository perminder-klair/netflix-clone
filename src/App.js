import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Card from './components/Card';

const Wrapper = styled.View`
  background-color: #ffffff;
  margin-top:50px;
`;

const Columns = styled.View`
  display: flex;
  flex-direction: row;
  margin: 4px;
`;

const Column = styled.View`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  border: 1px solid grey;
  margin: 4px;
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
          <Columns>
            <Column>
              <Text>bcjbdckjsd</Text>
            </Column>
            <Column>
              <Text>bcjbdckjsd</Text>
            </Column>
            <Column>
              <Text>bcjbdckjsd</Text>
            </Column>
          </Columns>
        </Wrapper>
      </ScrollView>
    );
  }
}