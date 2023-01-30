import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../sideScreens/HomeScreen';
import NotiFication from '../sideScreens/NotiFication';
import Sidebar from '../Sidebar';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <Sidebar {...props} />}
        >
            {/* default screen */}
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

        </Drawer.Navigator>
    );
};

export default MainScreen;
