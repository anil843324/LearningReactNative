import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CommonButton = ({ onPress, title, bgColor, textColor, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={{
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                width: '85%',
                marginTop: 50,
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
                    fontWeight: '600'

                }}
            >{title}

            </Text>

        </TouchableOpacity>
    )
}

export default CommonButton