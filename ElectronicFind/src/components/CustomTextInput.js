import { View, Text, TextInput, Image } from 'react-native';
import React from 'react';


const CustomTextInput = ({ value, onChangeText, placeholder, icon, type }) => {
    return (
        <View
            style={{
                width: '85%',
                height: 50,
                borderWidth: 0.5,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
            }}>
            <Image
                source={icon}
                style={{
                    width: 25,
                    height: 25,
                }}
            />

            <TextInput
                secureTextEntry={type ? true : false}
                style={{
                    color: 'black',
                    backgroundColor: 'red',
                    marginLeft: 10
                }}
                placeholder={placeholder} />
        </View>
    );
};

export default CustomTextInput;
