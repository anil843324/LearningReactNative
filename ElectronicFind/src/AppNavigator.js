import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import ChangePassword from './Screens/ChangePassword';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import CheckOut from './Screens/CheckOut';
import OrderSuccess from './Screens/OrderSuccess';
import Orders from './Screens/Orders';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Splash'
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
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='My Address'
                    component={MyAddress}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Add Address'
                    component={AddAddress}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Checkout'
                    component={CheckOut}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='OrderSuccess'
                    component={OrderSuccess}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Orders'
                    component={Orders}
                    options={{ headerShown: false }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator