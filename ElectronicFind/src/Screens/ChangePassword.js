import { View, Text, Image, TextInput, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [badNewPassword, setBadNewPassword] = useState(false);

    const [badConfirmNewPassword, setBadConfirmNewPassword] = useState(false);

    const showToast = () => {
        ToastAndroid.show('Please Enter Correct Password!', ToastAndroid.SHORT);
    };
    const successToast = () => {
        ToastAndroid.show('Password Successful Changed!', ToastAndroid.SHORT);
    };

    const validate = () => {


        if (newPassword === '') {

            setBadNewPassword(true);
        } else {
            setBadNewPassword(false);
            if (confirmNewPassword === '') {

                setBadConfirmNewPassword(true);
            } else {

                setTimeout(() => {
                    setBadConfirmNewPassword(false);
                    setData();
                }, 1000)



            }
        }

    };

    const setData = async () => {




        if (newPassword === confirmNewPassword) {

            await AsyncStorage.setItem('PASSWORD', newPassword);
            setConfirmNewPassword('');
            setNewPassword('')
            successToast();
        } else {

            showToast()
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
                Change Password
            </Text>


            <CustomTextInput
                placeholder={'Enter New Password'}
                icon={require('../images/password.png')}

                value={newPassword}
                onChangeText={txt => setNewPassword(txt)}
            />
            {badNewPassword === true && (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    New Password
                </Text>
            )}

            <CustomTextInput
                placeholder={'Enter Confirm New Password'}
                icon={require('../images/password.png')}

                value={confirmNewPassword}
                onChangeText={txt => setConfirmNewPassword(txt)}
            />
            {badConfirmNewPassword === true && (
                <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                    Confirm New Password
                </Text>
            )}

            <CommonButton
                bgColor={'black'}
                textColor={'white'}
                title={'Save'}
                onPress={() => {
                    validate();
                }}
            />




        </View>
    );
};

export default ChangePassword;
