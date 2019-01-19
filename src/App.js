
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Dashboard from './screens/Dashboard';
import VideoView from './screens/VideoView';

const MainStack = createStackNavigator({
  Dashboard: { screen: Dashboard },
  Video: { screen: VideoView },
});

const App = createAppContainer(MainStack);
export default App;

// class App extends Component {
//   render() {
//     return <MainStack />;
//   }
// }

// export default App;
