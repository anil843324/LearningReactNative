import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Header />

            <Image
                source={require('../images/banner.jpg')}
                style={{
                    width: '94%',
                    height: 200,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginTop: 10
                }}
            />






        </View>
    )
}

export default Main