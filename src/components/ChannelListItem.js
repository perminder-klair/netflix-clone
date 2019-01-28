import React from "react";
import styled from "styled-components";
import { Dimensions, TVEventHandler, findNodeHandle } from "react-native";

const { height } = Dimensions.get("window");

const ListItemWrapper = styled.TouchableOpacity`
  border-color: rgba(255, 255, 255, 0.9);
  background-color: ${props =>
    props.isFocused ? "rgba(255,255,255,0.2)" : "transparent"};
  border-width: 3;
  border-top-width: 0;
  padding-vertical: ${height / 30};
  padding-horizontal: 15;
`;

const TextStyled = styled.Text`
  color: ${props => props.theme.textColor};
  font-weight: 600;
  font-size: 18;
`;

class ChannelListItem extends React.Component {
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

    if (eventType === "focus") {
      this.setState({ isFocused: true });
    }

    if (eventType === "blur") {
      this.setState({ isFocused: false });
    }
  };

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
    const { item, channelNumber } = this.props;
    return (
      <ListItemWrapper
        key={channelNumber}
        ref={this.myRef}
        isFocused={isFocused}
      >
        <TextStyled>
          {`${channelNumber}.  `}
          {item}
        </TextStyled>
      </ListItemWrapper>
    );
  }
}

export default ChannelListItem;
