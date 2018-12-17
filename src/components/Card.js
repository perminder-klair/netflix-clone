import React, { Component } from 'react';
import { TouchableWithoutFeedback, Alert, Image } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
  background-color: ${props=> props.active ? 'red' : 'papayawhip' };
  border-color: ${props=> props.active ? 'red' : 'papayawhip' };
  border-width: 2;
  width: 150;
  height: 280;
  margin-vertical: 8;
  margin-horizontal: 8;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: 5;
  margin-bottom: 5;
  font-size: 14;
`;

class Card extends Component {
  constructor(){
    super();
    this.state={
      active:false
    }
  }

  onFocus = () => {
    this.setState({active: !this.state.active});
  }

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        onFocus={this.onFocus}
        onBlur={this.onFocus}
        onPress={() => navigation.navigate('Video', { item })} >
        <Container active={this.state.active}>
          <Image
            source={{ uri: item.Poster }}
            style={{ width: 150, height: 225 }} />
          <Title>
            {item.Title} - ({item.Year})
          </Title>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(Card);
