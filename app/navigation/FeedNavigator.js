import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{
        presentation:"modal"
    }}>
        <Stack.Screen name='Listings' component={ListingsScreen} options={{headerShown:false}} />
        <Stack.Screen name='Details' component={ListingDetailsScreen} />
    </Stack.Navigator>
)

export default FeedNavigator

const styles = StyleSheet.create({})