import React from 'react';
import styled from 'styled-components';
import {
  TextInput, Image, TVEventHandler, findNodeHandle, TouchableOpacity
} from 'react-native';
import theme from '../utils/theme';

const searchIcon = require('../assets/search-icon.png');

const Container = styled(TouchableOpacity)` 
 flex-grow:1;
 border-bottom-color: #fff;
 border-color: transparent;
 border-width: ${props => (props.isFocused ? 3 : 1)} ;
 flex-direction: row; 
 justify-content: space-between;
 align-items: center;
`;

const TextInputStyled = styled(TextInput)`
  height: 40;
  color: ${props => props.theme.textColor};
`;

class SearchForm extends React.Component {
  myRef = React.createRef();

  nodeHandle = null;

  evtHandler = null;

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isFocused: false
    };
  }

  componentDidMount() {
    this.nodeHandle = findNodeHandle(this.myRef.current);
    this.enableTVEventHandler();
  }

  componentWillUnmount() {
    this.disableTVEventHandler();
  }

  handleTVRemoteEvent = (cmp, event) => {
    const { eventType, tag } = event;
    if (tag !== this.nodeHandle) {
      return;
    }

    if (eventType === 'focus') {
      this.setState({ isFocused: true });
    }

    if (eventType === 'blur') {
      this.setState({ isFocused: false });
    }
  }


  enableTVEventHandler() {
    this.evtHandler = new TVEventHandler();
    this.evtHandler.enable(this, this.handleTVRemoteEvent);
  }

  disableTVEventHandler() {
    if (this.evtHandler) {
      this.evtHandler.disable();
      delete this.evtHandler;
    }
  }


  render() {
    const { text, isFocused } = this.state;
    return (
      <Container ref={this.myRef} isFocused={isFocused}>
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
