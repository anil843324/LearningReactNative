import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/screens/Splash';
import ToDo from './src/screens/ToDo';
import Done from './src/screens/Done';
import Task from './src/screens/Task';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeTab() {
    return (
        <Tab.Navigator
        >
            <Tab.Screen
                name="To-Do"
                component={ToDo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./assets/to-do-list.png')}
                            style={{ width: 24, height: 24, tintColor: color, }}
                        />
                    ),


                }}


            />
            <Tab.Screen
                name="Done"
                component={Done}
                options={{
                    headerShown: false,

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('./assets/done.png')}
                            style={{ width: 24, height: 24, tintColor: color }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                >
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{ headerShown: false }}
                    />


                    <Stack.Screen name="My Tasks" component={HomeTab}

                        options={{
                            headerShown: true,

                            headerStyle: {
                                backgroundColor: '#04c7ad',
                            },
                            // headerTintColor: 'orange',
                            headerTitleStyle: {
                                fontSize: 25,
                                fontWeight: '900'
                            }
                        }}

                    />

                    <Stack.Screen name="Task" component={Task}

                        options={{
                            headerShown: true,

                            headerStyle: {
                                backgroundColor: '#04c7ad',
                            },
                            // headerTintColor: 'orange',
                            headerTitleStyle: {
                                fontSize: 25,
                                fontWeight: '900'
                            }
                        }}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
