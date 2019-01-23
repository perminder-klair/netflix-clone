import React from 'react';
import styled from 'styled-components';
import { TextInput, Image } from 'react-native';

const searchIcon = require('../assets/search-icon.png');

const Container = styled.View` 
 flex-grow:1;
 border-bottom-color: #fff;
 border-width: 1;
 flex-direction: row; 
 justify-content: space-between;
 align-items: center;
`;

const TextInputStyled = styled(TextInput)`
  height: 40;
  color: #fff;
`;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Search' };
  }

  render() {
    const { text } = this.state;
    return (
      <Container>
        <TextInputStyled
          style={{

          }}
          onChangeText={text => this.setState({ text })}
          value={text}
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
