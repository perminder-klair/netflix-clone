import React from 'react';
import { Dimensions, TVEventHandler, findNodeHandle } from 'react-native';
import styled from 'styled-components';
import Button from './elements/Button';

const { width, height } = Dimensions.get('window');

const KeyBoard = styled.View`
  background-color: rgba(0,0,0,0.8);
  height: ${height / 2};
  width: ${width / 4};
  border-radius: 10;
  border-width: 3;
  border-color: rgba(255,255,255,0.8);
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10;
`;

const KeyWrapper = styled.TouchableOpacity`
  border-width: ${props => (props.isFocused ? 4 : 1)};
  border-color: #fff;
  width: 33.333333%;
  justify-content: center;
  align-items: center;
  height: 25%;
`;

const KeyStyled = styled.Text`
  text-align: center;
  color: ${props => props.theme.textColor};
  font-size: 18;
  font-weight: 600;
`;


const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0', 'X'];


export default ({ isActive }) => (
  <React.Fragment>
    {isActive && (
    <Button type="keyboard">
      {keys.map((keyItem, index) => (
        <Key keyItem={keyItem} key={keyItem} index={index} />
      ))}
    </Button>
    )}
  </React.Fragment>
);

class Key extends React.Component {
  myRef = React.createRef();

  nodeHandle = null;

  evtHandler = null;

  constructor() {
    super();
    this.state = {
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
    const { isFocused } = this.state;
    const { keyItem, index } = this.props;
    return (
      <KeyWrapper key={index} isFocused={isFocused} ref={this.myRef}>
        <KeyStyled>{keyItem}</KeyStyled>
      </KeyWrapper>
    );
  }
}
