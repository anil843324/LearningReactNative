import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({ onPress, title, bgColor, textColor, disabled }) => {
    return (
        <TouchableOpacity

            style={{
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: 200,
                height: 50,
                marginTop: 20,
                height: 50,
                borderRadius: 10,
                alignSelf: 'center'

            }}
            onPress={() => {
                onPress();
            }}
        >
            <Text
                style={{
                    color: textColor,
                    fontWeight: '600',


                }}
            >{title}

            </Text>

        </TouchableOpacity>
    )
}

export default CustomButton
