import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const Splash = () => {


    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('My Tasks')
        }, 2000);
    }, []);



    return (
        <View style={styles.body}>

            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Text style={styles.text}>
                To-Do List 👍

            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    logo: {
        width: 150,
        height: 150,
        margin: 20,
        borderRadius: 100,
    },
    text: {
        color: 'black',
        fontSize: 40,
        fontWeight: '600',

    }
})

export default Splash