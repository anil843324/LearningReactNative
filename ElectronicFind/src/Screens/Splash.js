import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
            <Image
                style={{
                    height: 120,
                    width: 120,
                    borderRadius: 50,
                }}
                source={require('../images/logo.png')}
            />
        </View>
    );
};

export default Splash;
