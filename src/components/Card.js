import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const TVEventHandler = require('TVEventHandler');

const StyledView = styled.View`
  background-color: ${props=> props.active ? 'red' : 'papayawhip' };
  padding: 5px;
  width: 200px;
  height: ${props=> props.active ? '100px' : 'auto' };
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
      <TouchableHighlight onFocus={this.onFocus} onLongPress={this.onFocus} onBlur={this.onFocus}>
        <StyledView active={this.state.active}>
          <Text>
            hello
            hxvhcxvcz
            xhcvhxvcx 
            cvhxvchxzhvch 
            cxjvchxzvhcvh 
            cvhxvchvx
          </Text>
        </StyledView>
      </TouchableHighlight>
    );
  }
}

export default Card;