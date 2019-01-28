import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components";
import ChannelList from "../components/ChannelList";
import Keyboard from "../components/Keyboard";

const featuredImage = require("../assets/large-poster.png");

const { width, height } = Dimensions.get("window");

const VideoWrapper = styled.View`
  position: absolute;
`;

const Left = styled.View`
  flex: 1;
  height: ${height};
  border-color: transparent;
  border-width: 3;
  max-height: ${height};
  flex-direction: row;
`;

const ChannelWrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  height: ${height};
  width: ${width / 3};
`;

const KeyboardWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

class Test extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    activeKey: ""
    // keyBoardVisibility: false
  };

  handleKeyPress = value => {
    const { activeKey } = this.state;
    this.setState({ activeKey: `${activeKey}${value}` });
    setTimeout(() => {
      this.setState({ activeKey: "" });
    }, 2000);
  };

  // handleFocus = value => {
  //   this.setState({ keyBoardVisibility: value });
  // };

  render() {
    console.log("This is working!");
    const { activeKey, keyBoardVisibility } = this.state;
    console.log(keyBoardVisibility);
    return (
      <React.Fragment>
        <VideoWrapper>
          <Image source={featuredImage} style={{ width, height }} />
        </VideoWrapper>
        <Left>
          <ChannelWrapper>
            <ChannelList filterTag={activeKey} />
          </ChannelWrapper>
          <KeyboardWrapper keyBoardVisibility={keyBoardVisibility}>
            {/* Change props to false to hide Keyboard */}

            <Keyboard
              isActive
              handleKeyPress={this.handleKeyPress}
              // handleFocus={this.handleFocus}
            />
          </KeyboardWrapper>
        </Left>
      </React.Fragment>
    );
  }
}

export default Test;
