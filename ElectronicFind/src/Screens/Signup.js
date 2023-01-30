import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();

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
                />

                <CustomTextInput
                    placeholder={'Enter Email Id'}
                    icon={require('../images/email.png')}
                />

                <CustomTextInput
                    placeholder={'Enter Mobile'}
                    icon={require('../images/number.png')}
                />

                <CustomTextInput
                    placeholder={'Enter Password'}
                    icon={require('../images/password.png')}
                    type={'password'}
                />

                <CommonButton
                    bgColor={'black'}
                    textColor={'white'}
                    title={'Sign Up'}
                    onPress={() => { }}
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
