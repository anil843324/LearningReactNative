import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator