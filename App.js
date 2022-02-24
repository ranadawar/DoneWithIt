import * as React from 'react';
import { View, Text } from 'react-native';

import Screen from './app/components/Screen';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppButton from './app/components/Button';
import colors from './app/config/colors';

const Tweets=({navigation})=>(
  <Screen>
    <Text>Tweets</Text>
    <AppButton title='Details' onPress={()=>navigation.navigate('TweetsDetails')} />
  </Screen>
)
const TweetDetails=()=>(
  <Screen>
    <Text>TweetDetails</Text>
  </Screen>
)

const Tab=createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor:'tomato',
        tabBarActiveTintColor:'white',
        
      }}>
        <Tab.Screen name='Tweets' component={Tweets} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name='home' size={size} color={color} />}} />
        <Tab.Screen name='TweetDetails' component={TweetDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;