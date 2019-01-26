

import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, TVEventHandler, findNodeHandle } from 'react-native';

const Wrapper = styled(TouchableOpacity)`

`;

const NavItem = styled(TouchableOpacity)`
border-bottom-color:${props => (props.isFocused ? '#fff' : 'transparent')};
border-width:${props => (props.isFocused ? 2 : 0)};
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
