import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();









    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
            <Image
                source={require('../images/logo.png')}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 120,
                    alignSelf: 'center',
                    marginTop: 100,
                }}
            />

            <Text
                style={{
                    color: 'black',
                    marginTop: 50,
                    alignSelf: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                }}>
                Login
            </Text>
            <CustomTextInput
                placeholder={'Enter Email Id'}
                icon={require('../images/email.png')}
            />
            <CustomTextInput
                placeholder={'Enter Password'}
                icon={require('../images/password.png')}
                type={'password'}
            />

            <CommonButton
                bgColor={'black'}
                textColor={'white'}
                title={'Login'}
                onPress={() => {

                }}
            />

            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    alignSelf: 'center',
                    marginTop: 20,
                    textDecorationLine: 'underline'
                }}
                onPress={() => {
                    navigation.navigate('Signup')
                }}
            >Create New Account</Text>



        </View>
    );
};

export default Login;
