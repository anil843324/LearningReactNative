import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = () => {
    return (
        <View
            style={{
                width: '100%',
                height: 70,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 0.3,
                borderBottomColor: '#8e8e8e',
                backgroundColor: '#fff'

            }}
        >

            <Text
                style={{
                    fontWeight: '600',
                    fontSize: 20,
                    color: '#000',
                    marginLeft: 20,
                }}
            >
                ElectronicApp
            </Text>

            <TouchableOpacity

                style={{
                    marginRight: 20,
                    justifyContent: 'center'

                }}
            >

                <Text
                    style={{
                        color: 'grey'
                    }}
                >
                    Mode

                </Text>

            </TouchableOpacity>

        </View>
    )
}

export default Header