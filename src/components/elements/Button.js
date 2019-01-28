

import React from 'react';
import styled from 'styled-components';
import {
  TouchableOpacity, TVEventHandler, findNodeHandle, Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Wrapper = styled(TouchableOpacity)`
`;

const LogoWrapper = styled(TouchableOpacity)`
`;

const KeyboardWrapper = styled(TouchableOpacity)`
  background-color: ${props => (props.isFocused ? 'green' : 'rgba(0,0,0,0.8)')};
  height: ${height / 2};
  width: ${width / 4};
  border-radius: 10;
  border-width: 3;
  border-color: rgba(255,255,255,0.8);
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10;
`;

const NavItem = styled(TouchableOpacity)`
  border-color: transparent;
  border-bottom-color:${props => (props.isFocused ? '#fff' : 'transparent')};
  border-width:${props => (props.isFocused ? 2 : 0)};
  margin-right: 15;
`;

const VideoItem = styled(TouchableOpacity)`
`;


class Button extends React.Component {
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
    const { type, children } = this.props;

    if (type === 'video') {
      return (
        <VideoItem ref={this.myRef} isFocused={isFocused}>
          {children}
        </VideoItem>
      );
    }
    if (type === 'logo') {
      return (
        <LogoWrapper ref={this.myRef} isFocused={isFocused}>
          {children}
        </LogoWrapper>
      );
    }

    if (type === 'keyboard') {
      return (
        <KeyboardWrapper ref={this.myRef} isFocused={isFocused}>
          {children}
        </KeyboardWrapper>
      );
    }

    if (type === 'navItem') {
      return (
        <NavItem ref={this.myRef} isFocused={isFocused}>
          {children}
        </NavItem>
      );
    }
    return (
      <Wrapper ref={this.myRef} isFocused={isFocused}>
        {children}
      </Wrapper>
    );
  }
}


export default Button;
