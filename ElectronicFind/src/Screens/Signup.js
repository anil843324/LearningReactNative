import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const [badPassword, setBadPassword] = useState(false);
    const [badEmail, setBadEmail] = useState(false);
    const [badNumber, setBadNumber] = useState(false);
    const [badName, setBadName] = useState(false);
    const [badConfirmPassword, setBadConfirmPassword] = useState(false);

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
        if (name === '') {
            setBadName(true);
        } else {
            setBadName(false)
        }
        if (number === '') {
            setBadNumber(true);
        } else {
            setBadNumber(false)
        }
        if (confirmPassword === '') {
            setBadConfirmPassword(true);
        } else {
            setBadConfirmPassword(false)
        }
        if (confirmPassword !== password) {
            setBadConfirmPassword(true)
        } else {
            setBadConfirmPassword(false)
        }

    };





    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
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
                    Create New Account
                </Text>
                <CustomTextInput
                    placeholder={'Enter Name'}
                    icon={require('../images/user.png')}
                    value={name}
                    onChangeText={txt => setName(txt)}

                />
                {badName === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Name
                    </Text>
                )}

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
                    placeholder={'Enter Mobile'}
                    icon={require('../images/number.png')}
                    value={number}
                    keyboardType={'number-pad'}
                    onChangeText={txt => setNumber(txt)}
                />
                {badNumber === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Number
                    </Text>
                )}

                <CustomTextInput
                    placeholder={'Enter Password'}
                    icon={require('../images/password.png')}

                    value={password}
                    onChangeText={txt => setPassword(txt)}

                />
                {badPassword === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Password
                    </Text>
                )}

                <CustomTextInput
                    placeholder={'Enter Confirm Password '}
                    icon={require('../images/password.png')}

                    value={confirmPassword}
                    onChangeText={txt => setConfirmPassword(txt)}

                />
                {badConfirmPassword === true && (
                    <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                        Please Enter Correct Password
                    </Text>
                )}

                <CommonButton
                    bgColor={'black'}
                    textColor={'white'}
                    title={'Sign Up'}
                    onPress={() => {
                        validate();
                    }}
                />

                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        alignSelf: 'center',
                        marginTop: 20,
                        textDecorationLine: 'underline',
                        marginBottom: 50,
                    }}
                    onPress={() => {
                        navigation.goBack('Login');
                    }}>
                    Already have account?
                </Text>
            </View>
        </ScrollView>
    );
};

export default Signup;
