import React from 'react';
import styled from 'styled-components';
import {
  Dimensions, FlatList, TVEventHandler, findNodeHandle
} from 'react-native';

const { height } = Dimensions.get('window');

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


const ListItem = styled.TouchableOpacity`
  border-color: ${props => (props.active ? 'red' : 'rgba(255,255,255,0.9)')};
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

const ChannelList = () => (
  <FlatList
    data={channels}
    renderItem={({ item, index }) => (
      <List item={item} index={index} />
    )}
  />
);
class List extends React.Component {
  myRef = React.createRef();

  nodeHandle = null;

  evtHandler = null;

  constructor() {
    super();
    this.state = {
      active: false
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
      this.setState({ active: true });
    }

    if (eventType === 'blur') {
      this.setState({ active: false });
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
    const { active } = this.state;
    const { item, index } = this.props;
    return (
      <ListItem key={index} ref={this.myRef} active={active}>
        <TextStyled>
          {`${index + 1}.  `}
          {item}
        </TextStyled>
      </ListItem>

    );
  }
}

export default ChannelList;
