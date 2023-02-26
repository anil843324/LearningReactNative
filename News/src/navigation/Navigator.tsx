import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import NewsOverview from '../components/NewsOverview';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsOverview" component={NewsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
