
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/Dashboard';
import VideoView from './screens/VideoView';
import Login from './screens/Login';
import Search from './screens/Search';
import Test from './screens/Test';

const MainStack = createStackNavigator({
  Test: { screen: Test },
  Search: { screen: Search },
  Dashboard: { screen: Dashboard },
  Video: { screen: VideoView },
  Login: { screen: Login },
});

const App = createAppContainer(MainStack);
export default App;
