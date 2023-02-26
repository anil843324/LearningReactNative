import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewsOverview from '../components/NewsOverview';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../icons/home.png')}
              style={{height: 24, width: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerShown: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../icons/saved.png')}
              style={{height: 24, width: 24}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="NewsOverview" component={NewsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
