import HomeSreen from '../components/HomeScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const screens = {
    Home: {
        screen:HomeSreen
    }
}

const navigator = createStackNavigator(screens);

export default createAppContainer(navigator);

