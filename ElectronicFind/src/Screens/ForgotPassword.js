import { View, Text, Image, TextInput, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';


const ForgotPassword = () => {


    const [email, setEmail] = useState('');

    const [badEmail, setBadEmail] = useState(false);

    const showToast = () => {
        ToastAndroid.show('Password Reset Email Sent Please check your Email!', ToastAndroid.SHORT);
    };



    const validate = () => {
        if (email === '') {
            setBadEmail(true);
        } else {
            setBadEmail(false);
        }
        showToast()

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
                Forgot Password
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

            <CommonButton
                bgColor={'black'}
                textColor={'white'}
                title={'Send'}
                onPress={() => {
                    validate();
                }}
            />
        </View>
    );
};

export default ForgotPassword;
