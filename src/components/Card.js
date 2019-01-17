import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
  background-color: ${props => (props.active ? '#fff' : 'transparent')};
  width: ${props => (props.active ? '300' : '180')};
  height: ${props => (props.active ? '200' : '100')};
  margin-vertical: 8;
  margin-horizontal: 3;

`;

const ImageStyled = styled(Image)`
  width: ${props => (props.active ? '300' : '180')};
  height: ${props => (props.active ? '200' : '100')};
`;

const Overlay = styled.View`
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: 5;
  margin-bottom: 5;
  font-size: 14;
  color: #fff;
`;

class Card extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }


  onFocus = () => {
    this.setState({ active: true });
  }

  onBlur = () => {
    this.setState({ active: false });
  }

  render() {
    const { item, navigation } = this.props;
    const { active } = this.state;
    return (
      <TouchableWithoutFeedback
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onPress={() => navigation.navigate('Video', { item })}
      >
        <Container active={this.state.active}>
          <ImageStyled
            source={{ uri: item.Poster }}
            active={this.state.active}
          />
          { active && (
          <Overlay active={this.state.active}>

            <Title>
              {item.Title}

- (
              {item.Year}
)
            </Title>

          </Overlay>
          )}

        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(Card);
