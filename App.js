import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import TestScreen from './src/screens/TestScreen';
import TravelScreen from './src/screens/TravelScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ImageScreen,
    Images: ImagesScreen,
    Test: TestScreen,
    Travel: TravelScreen,
  },
  {
    initialRouteName: 'Travel',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
