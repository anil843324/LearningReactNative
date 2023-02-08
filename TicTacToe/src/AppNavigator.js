import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator