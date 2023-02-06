import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

let name = '';

const Profile = () => {
    const navigation = useNavigation();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        name = await AsyncStorage.getItem('NAME');
    };


    const removeLocalStorageData = async () => {

        try {
            await AsyncStorage.removeItem('EMAIL');
            await AsyncStorage.removeItem('PASSWORD');
            await AsyncStorage.removeItem('NAME');
            await AsyncStorage.removeItem('PHONE');

            navigation.navigate('Login')
        } catch (e) {
            // remove error
        }

    }


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
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        marginLeft: 15,
                        fontWeight: '600',
                    }}>
                    Profile
                </Text>

                <TouchableOpacity
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        style={{
                            height: 24,
                            width: 24,
                        }}
                        source={require('../images/settings.png')}
                    />
                </TouchableOpacity>
            </View>
            <Image
                style={{
                    height: 80,
                    width: 80,
                    alignSelf: 'center',
                    marginTop: 30,
                }}
                source={require('../images/profile.png')}
            />

            <Text
                style={{
                    color: 'black',
                    alignSelf: 'center',
                    marginTop: 20,
                    fontSize: 18,
                    fontWeight: '600',
                }}>
                {name}
            </Text>

            <TouchableOpacity
                style={{
                    width: '90%',
                    borderBottomWidth: 2,
                    height: 50,
                    alignSelf: 'center',
                    borderBottomColor: '#8e8e8e',
                    marginTop: 20,
                    justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('My Address')}>
                <Text
                    style={{
                        color: 'black',
                    }}>
                    Address
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '90%',
                    borderBottomWidth: 2,
                    height: 50,
                    alignSelf: 'center',
                    borderBottomColor: '#8e8e8e',

                    justifyContent: 'center',
                }}
                onPress={() => {

                    navigation.navigate('Orders')
                }}
            >
                <Text
                    style={{
                        color: 'black',
                    }}>
                    My Orders
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '90%',
                    borderBottomWidth: 2,
                    height: 50,
                    alignSelf: 'center',
                    borderBottomColor: '#8e8e8e',

                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        color: 'black',
                    }}>
                    Offers
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: '90%',
                    borderBottomWidth: 2,
                    height: 50,
                    alignSelf: 'center',
                    borderBottomColor: '#8e8e8e',

                    justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('Change Password')}>
                <Text
                    style={{
                        color: 'black',
                    }}>
                    Change Password
                </Text>
            </TouchableOpacity>

            <TouchableOpacity

                onPress={() => removeLocalStorageData()}
            >
                <Image
                    style={{
                        height: 40,
                        width: 40,
                        alignSelf: 'center',
                        marginTop: 30,
                    }}
                    source={require('../images/logout.png')}
                />
            </TouchableOpacity>


        </View>
    );
};

export default Profile;
