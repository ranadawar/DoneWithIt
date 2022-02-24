import React from 'react';

import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';



import {MaterialCommunityIcons} from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import colors from '../config/colors';

const Tab=createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor:colors.primary,tabBarActiveTintColor:colors.white}}>
        <Tab.Screen name='Feed' component={FeedNavigator} options={{
            tabBarIcon:({size,color})=><MaterialCommunityIcons name='home' color={color} size={size}
             />,
             headerShown:false
        }} />
        <Tab.Screen name='AddListing' component={ListingEditScreen} options={({navigation})=>({
            tabBarButton:()=><NewListingButton onPress={()=>navigation.navigate('AddListing')} />,
             headerShown:false
        })} />
        <Tab.Screen name='Accounts' component={AccountNavigator} options={{
            tabBarIcon:({size,color})=><MaterialCommunityIcons name='face-outline' color={color} size={size} />,
            headerShown:false
        }} />
       
    </Tab.Navigator>
) 

export default AppNavigator
