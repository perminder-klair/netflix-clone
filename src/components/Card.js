import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const TVEventHandler = require('TVEventHandler');

const StyledView = styled.View`
  background-color: ${props=> props.active ? 'red' : 'papayawhip' };
  padding-vertical: 5;
  padding-horizontal: 5;
  width: 200;
  height: 200
`;

class Card extends Component {
  constructor(){
    super();
    this.state={
      active:false
    }
  }

  onFocus = () => {
    this.setState({active:!this.state.active});
  }

  render() {
    return (
      <TouchableWithoutFeedback  onFocus={this.onFocus} onLongPress={this.onFocus} onBlur={this.onFocus}>
        <StyledView active={this.state.active}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </StyledView>
      </TouchableWithoutFeedback>
    );
  }
}

export default Card;