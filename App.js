import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const navigator = createStackNavigator({
  Home: {screen : HomeScreen},
  Detail:{screen : DetailScreen}
},
{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'App'
  }
});

export default createAppContainer(navigator);


// import React from 'react';
// import Navigator from './routes/HomeStack'

// const App: () => React$Node = () => {
//   return (
//     <Navigator/>
//   );
// };

// export default App;