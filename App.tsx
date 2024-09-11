import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from './src/screens/GalleryScreen';
import ComparisonScreen from './src/screens/ComparisonScreen';

const Stack = createStackNavigator();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Comparison" component={ComparisonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
