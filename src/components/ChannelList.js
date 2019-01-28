import React from 'react';
import {
  FlatList
} from 'react-native';
import ChannelListItem from './ChannelListItem';

const channels = [
  'Channel One',
  'Channel Two',
  'Channel Three',
  'Channel Four',
  'Channel Five',
  'Channel Six',
  'Channel Seven',
  'Channel Eight',
  'Channel Nine',
  'Channel Ten',
  'Channel Eleven',
  'Channel Twelve'
];


const ChannelList = () => (
  <FlatList
    data={channels}
    renderItem={({ item, index }) => (
      <ChannelListItem item={item} index={index} />
    )}
  />
);

export default ChannelList;
