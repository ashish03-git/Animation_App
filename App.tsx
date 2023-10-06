import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import GeneralInformation from './Screens/GenralInformation';
import Flight from './Screens/Flight';
import Hotel from './Screens/Hotel';
import Taxi_Car from './Screens/Taxi_Car';

const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='graph'>
        <Stack.Screen name='welcome' options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name='home' options={{ headerShown: false }} component={Home} />
        <Stack.Screen name='info' options={{ headerShown: false }} component={GeneralInformation} />
        <Stack.Screen name='flight' options={{ headerShown: false }} component={Flight} />
        <Stack.Screen name='hotel' options={{ headerShown: false }} component={Hotel} />
        <Stack.Screen name='taxi_car' options={{ headerShown: false }} component={Taxi_Car} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App