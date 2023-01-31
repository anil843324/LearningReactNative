import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [badPassword, setBadPassword] = useState(false);
    const [badEmail, setBadEmail] = useState(false);

    const validate = () => {
        if (email === '') {
            setBadEmail(true);
        } else {
            setBadEmail(false)
        }
        if (password === '') {
            setBadPassword(true);
        } else {
            setBadPassword(false)
        }
    };

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
                value={email}
                onChangeText={txt => setEmail(txt)}
            />
            {badEmail === true && (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter Email Id
                </Text>
            )}

            <CustomTextInput
                placeholder={'Enter Password'}
                icon={require('../images/password.png')}
                type={'password'}
                value={password}
                onChangeText={txt => setPassword(txt)}
            />
            {badPassword === true && (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Please Enter Password
                </Text>
            )}

            <CommonButton
                bgColor={'black'}
                textColor={'white'}
                title={'Login'}
                onPress={() => {
                    validate();
                }}
            />

            <View
                style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,

                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        alignSelf: 'center',

                        textDecorationLine: 'underline',
                    }}
                    onPress={() => {
                        navigation.navigate('Signup');
                    }}>
                    Create New Account
                </Text>

                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        alignSelf: 'center',

                        textDecorationLine: 'underline',
                    }}
                    onPress={() => {
                        navigation.navigate('Forgot Password');
                    }}>
                    Forgot Password
                </Text>

            </View>

            {/* <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    alignSelf: 'center',

                    textDecorationLine: 'underline',
                }}
                onPress={() => {
                    navigation.navigate('Change Password');
                }}>
                Change Password
            </Text> */}


        </View>
    );
};

export default Login;
