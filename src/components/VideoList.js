import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import VideoItem from './VideoItem';


const Columns = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25;
  margin-bottom: 8;
  margin-horizontal: 8;
`;

const HeadingStyled = styled.Text`
  color: ${props => props.theme.textColor};
  font-size: 18;
`;

export default ({ title, videos }) => (
  <React.Fragment>
    <Columns>
      <HeadingStyled>{title}</HeadingStyled>
    </Columns>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
      {videos.map(item => (
        <VideoItem key={item.imdbID} item={item} />
      ))}
    </ScrollView>
  </React.Fragment>
);
