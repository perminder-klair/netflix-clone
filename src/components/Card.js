import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
  background-color: ${props => (props.active ? 'red' : 'transparent')};
  border-color: ${props => (props.active ? 'red' : 'transparent')};
  border-width: 2;
  width: 180;
  height: 100;
  margin-vertical: 8;
  margin-horizontal: 3;
  margin-bottom: 20;
`;

// const Title = styled.Text`
//   text-align: center;
//   margin-top: 5;
//   margin-bottom: 5;
//   font-size: 14;
// `;

class Card extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  onFocus = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        onFocus={this.onFocus}
        onBlur={this.onFocus}
        onPress={() => navigation.navigate('Video', { item })}
      >
        <Container active={this.state.active}>
          <Image
            source={{ uri: item.Poster }}
            style={{ width: 180, height: 100 }}
          />
          {/*   <Title>
            {item.Title}

- (
            {item.Year}
)
          </Title> */}
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(Card);
