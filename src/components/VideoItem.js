import React, { Component } from 'react';
import {
  TouchableWithoutFeedback, Image, Dimensions
} from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';


const deviceWidth = Dimensions.get('window').width / 3.2;

const Container = styled.View`
  background-color: ${props => (props.active ? '#fff' : 'transparent')};
  width: ${props => (props.active ? '300' : '180')};
  height: ${props => (props.active ? '200' : '100')};
  margin-vertical: 8;
  margin-horizontal: 2;
`;

const ImageStyled = styled(Image)`
  width: ${props => (props.active ? '300' : '180')};
  height: ${props => (props.active ? '200' : '100')};
`;

const Overlay = styled.View`
  border-style: solid;
  border-color: rgba(255,255,255,0.8);
  border-width: 1;
  position: absolute;
  background-color: rgba(0,0,0,0.8);
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
`;

const VideoDetails = styled.View`
  height: 50%;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding-horizontal: 10;
`;


const Title = styled.Text`
  font-size: 22;
  color: #fff;
  font-weight: bold;
`;

const UploadTime = styled.Text`
  font-size: 14;
  color: rgba(255,255,255,0.8);
`;

const VideoStats = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 5;
  width: 100%;
  padding-horizontal: 10;
`;
const PublicStatsContainer = styled.View`

flex-direction: row;
flex-grow: 1;
align-items: center;
`;

const StatText = styled.Text`
  font-size: 12;
  color: rgba(255,255,255,0.8);
  margin-right: 5;
`;
const Time = styled.Text`
  font-size: 16;
  color: #ffffff;
  `;

const ContainerSecondary = styled.View`
  flex: 1;
  flex-grow: 1;
  background-color: ${props => (props.active ? '#fff' : 'red')};
  width: ${props => (props.active ? '400' : deviceWidth)};
  height: ${props => (props.active ? '200' : '150')};
  margin-vertical: 8;
  margin-horizontal: 5;
`;

const ImageStyledSecondary = styled(Image)`
  width: ${props => (props.active ? '100%' : '100%')};
  height: ${props => (props.active ? '100%' : '100%')};
`;
class VideoItem extends Component {
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
    const { item, navigation, type } = this.props;
    const { active } = this.state;
    if (type !== 'secondary') {
      return (
        <TouchableWithoutFeedback
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onPress={() => navigation.navigate('Video', { item })}
        >
          <Container active={active}>
            <ImageStyled
              source={{ uri: item.Poster }}
              active={active}
            />
            { active && (
            <Overlay active={active}>
              <VideoDetails>
                <Title>
                  {item.Title}
                </Title>
                <UploadTime>
                  {item.Year}
                </UploadTime>
              </VideoDetails>
              <VideoStats>
                <PublicStatsContainer>
                  <StatText>1 like</StatText>
                  <StatText>1 comment</StatText>
                  <StatText>2 views</StatText>
                </PublicStatsContainer>
                <Time>1h 30min</Time>
              </VideoStats>
            </Overlay>
            )}

          </Container>
        </TouchableWithoutFeedback>
      );
    }

    return (
      <TouchableWithoutFeedback
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onPress={() => navigation.navigate('Video', { item })}
      >
        <ContainerSecondary active={active}>
          <ImageStyledSecondary
            source={{ uri: item.Poster }}
            active={active}
          />
          { active && (
          <Overlay active={active}>
            <VideoDetails>
              <Title>
                {item.Title}
              </Title>
              <UploadTime>
                {item.Year}
              </UploadTime>
            </VideoDetails>
            <VideoStats>
              <PublicStatsContainer>
                <StatText>1 like</StatText>
                <StatText>1 comment</StatText>
                <StatText>2 views</StatText>
              </PublicStatsContainer>

              <Time>1h 30min</Time>

            </VideoStats>
          </Overlay>
          )}
        </ContainerSecondary>
      </TouchableWithoutFeedback>
    );
  }
}

export default withNavigation(VideoItem);
