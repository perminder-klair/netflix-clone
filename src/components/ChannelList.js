import React from 'react';
import { FlatList } from 'react-native';
import { filter, isEmpty } from 'lodash';
import ChannelListItem from './ChannelListItem';

const channels = [
  { key: 1, name: 'Channel One' },
  { key: 2, name: 'Channel Two' },
  { key: 3, name: 'Channel Three' },
  { key: 4, name: 'Channel Four' },
  { key: 5, name: 'Channel Five' },
  { key: 6, name: 'Channel Six' },
  { key: 7, name: 'Channel Seven' },
  { key: 8, name: 'Channel Eight' },
  { key: 9, name: 'Channel Nine' },
  { key: 10, name: 'Channel Ten' },
  { key: 11, name: 'Channel Eleven' },
  { key: 12, name: 'Channel Twelve' }
];

const ChannelList = ({ filterTag }) => {
  const data = filter(channels, channel => channel.key === parseInt(filterTag, 10));

  return (
    <FlatList
      data={isEmpty(data) ? channels : data}
      renderItem={({ item }) => (
        <ChannelListItem
          item={item.name}
          channelNumber={item.key}
          key={item.key}
        />
      )}
    />
  );
};

export default ChannelList;
