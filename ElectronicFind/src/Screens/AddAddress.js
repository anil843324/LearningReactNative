import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';
import CommonButton from '../components/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';

const AddAddress = () => {
    const navigation = useNavigation();

    const [city, setCity] = useState('');
    const [building, setBuilding] = useState('');
    const [pinCode, setPinCode] = useState('');

    const dispatch = useDispatch();

    return (
        <View
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    width: '100%',
                    height: 70,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 20,
                }}>
                <TouchableOpacity
                    style={{
                        marginLeft: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        padding: 7,
                        borderRadius: 10,
                    }}
                    onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                        }}
                        source={require('../images/backButton.png')}
                    />
                </TouchableOpacity>
            </View>

            <CustomTextInput
                placeholder={'Enter City Name'}
                icon={require('../images/city.png')}
                value={city}
                onChangeText={txt => setCity(txt)}
            />
            <CustomTextInput
                placeholder={'Enter Building Name'}
                icon={require('../images/building.png')}
                value={building}
                onChangeText={txt => setBuilding(txt)}
            />
            <CustomTextInput
                placeholder={'Enter Pin Code No.'}
                keyboardType={'number-pad'}
                icon={require('../images/address.png')}
                value={pinCode}
                onChangeText={txt => setPinCode(txt)}
            />

            <CommonButton
                title={'Save address'}
                textColor={'#fff'}
                bgColor={'black'}
                onPress={() => {
                    if (building !== '' && pinCode !== '' && city !== '') {
                        dispatch(
                            addAddress({
                                building,
                                pinCode,
                                city,
                            }),
                        );
                    }

                    navigation.goBack('');
                }}
            />
        </View>
    );
};

export default AddAddress;
