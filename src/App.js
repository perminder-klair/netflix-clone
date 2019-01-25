
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/Dashboard';
import VideoView from './screens/VideoView';
import Login from './screens/Login';
import Search from './screens/Search';

const MainStack = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Video: { screen: VideoView },
  Login: { screen: Login },
  Search: { screen: Search },

});

const App = createAppContainer(MainStack);
export default App;
