import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import ChangePassword from './Screens/ChangePassword';

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
                <Stack.Screen
                    name='Forgot Password'
                    component={ForgotPassword}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name='Change Password'
                    component={ChangePassword}
                    options={{ headerShown: true }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator