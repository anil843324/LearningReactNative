import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let isValid = true;
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
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const signup = () => {
        setButtonDisabled(true);

        if (name === '') {
            setBadName(true);
            setButtonDisabled(false);
        } else {
            setBadName(false);
            if (email === '') {
                setBadEmail(true);
                setButtonDisabled(false);
            } else {
                setBadEmail(false);

                if (number === '') {
                    setBadNumber(true);
                    setButtonDisabled(false);
                } else if (number.length < 10) {
                    setBadNumber(true);
                    setButtonDisabled(false);
                } else {
                    setBadNumber(false);

                    if (password === '') {
                        setBadPassword(true);
                        setButtonDisabled(false);
                    } else {
                        setBadPassword(false);

                        if (confirmPassword === '') {
                            setBadConfirmPassword(true);
                            setButtonDisabled(false);
                        } else {
                            setBadConfirmPassword(false);

                            if (confirmPassword !== password) {
                                setBadConfirmPassword(true);
                                setButtonDisabled(false);
                            } else {
                                setBadConfirmPassword(false);
                                saveData();
                            }
                        }
                    }
                }
            }
        }

    };


    const saveData = async () => {
        await AsyncStorage.setItem('EMAIL', email);
        await AsyncStorage.setItem('PASSWORD', password);
        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('PHONE', number);
        navigation.goBack('Login');
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
                    bgColor={buttonDisabled ? '#8e8e83' : 'black'}
                    textColor={'white'}
                    title={'Sign Up'}
                    onPress={() => {
                        signup();
                    }}
                    disabled={buttonDisabled}
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
