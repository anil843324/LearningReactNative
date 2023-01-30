import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../bottom/Home';
import Settings from '../bottom/Settings';
const Bottom = createBottomTabNavigator();
const HomeScreen = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,

                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Bottom.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="setting" color={color} size={size} />
                    ),
                }}
            />
        </Bottom.Navigator>
    );
};

export default HomeScreen;
