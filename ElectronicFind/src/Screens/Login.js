import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [badPassword, setBadPassword] = useState(false);
    const [badEmail, setBadEmail] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const login = () => {
        setModalVisible(true);

        if (email === '') {
            setModalVisible(false);
            setBadEmail(true);
        } else {
            setBadEmail(false);
            if (password === '') {
                setModalVisible(false);
                setBadPassword(true);
            } else {

                setTimeout(() => {
                    setBadPassword(false);
                    getData();
                }, 2000)



            }
        }
    };

    const getData = async () => {
        const mEmail = await AsyncStorage.getItem('EMAIL');
        const mPassword = await AsyncStorage.getItem('PASSWORD');


        if (mEmail === email && password === mPassword) {
            setModalVisible(false);
            navigation.navigate('Home');
        } else {
            setModalVisible(false);
            alert('Please Enter Valid Email and Password');
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
                    login();
                }}
            />

            <View
                style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,

                    justifyContent: 'space-between',
                }}>
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

            <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

export default Login;
