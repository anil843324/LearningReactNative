import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('MainScreen')
        }, 3000)

    }, [])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ color: 'grey', fontWeight: '700', fontSize: 20 }}>Splash</Text>
        </View>
    )
}

export default Splash