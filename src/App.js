import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';

import Dashboard from './screens/Dashboard';
import VideoView from './screens/VideoView';

const MainStack = createStackNavigator({
  Dashboard: {screen: Dashboard},
  Video: {screen: VideoView},
});

class App extends Component {
  render() {
    return <MainStack />;
  }
}

export default App;
