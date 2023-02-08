import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            callMainScreen();
        }, 3000);
    }, []);

    const callMainScreen = () => {
        navigation.navigate('Home');
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
            <View
                style={{

                }}
            >
                <Text style={{ color: 'green', fontSize: 20, fontWeight: '900', marginBottom: 50, }}>
                    Welcome To TicTacToe Game 👍
                </Text>
                <Image
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 50,
                        alignSelf: 'center'
                    }}
                    source={require('../../images/logo.png')}
                />

            </View>

        </View>
    );
};

export default Splash;
