import React from 'react';
import styled from 'styled-components';
import { TextInput, Image } from 'react-native';
import theme from '../utils/theme';

const searchIcon = require('../assets/search-icon.png');

const Container = styled.View` 
 flex-grow:1;
 border-bottom-color: #fff;
 border-color: transparent;
 border-width: 1;
 flex-direction: row; 
 justify-content: space-between;
 align-items: center;
`;

const TextInputStyled = styled(TextInput)`
  height: 40;
  color: ${props => props.theme.textColor};
`;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    const { text } = this.state;
    return (
      <Container>
        <TextInputStyled
          style={{

          }}
          onChangeText={value => this.setState({ text: value })}
          value={text}
          placeholder="Search"
          placeholderTextColor={theme.textColor}
        />
        <Image
          source={searchIcon}
          style={{ height: 20, width: 20, resizeMode: 'contain' }}
        />
      </Container>
    );
  }
}

export default SearchForm;
