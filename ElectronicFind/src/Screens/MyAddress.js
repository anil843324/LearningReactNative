import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddress } from '../redux/actions/Actions';

let addressList = [];
const MyAddress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    addressList = useSelector(state => state.addressReducer);

    console.log(addressList);

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
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        marginLeft: 15,
                        fontWeight: '600',
                    }}>
                    My Address
                </Text>

                <TouchableOpacity
                    style={{
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.5,
                        padding: 7,
                        borderRadius: 10,
                    }}
                    onPress={() => navigation.navigate('Add Address')}>
                    <Text
                        style={{
                            color: 'black',
                        }}>
                        Add Address
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={addressList}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: '100%',
                                borderWidth: 0.5,
                                borderColor: '#8e8e8e',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View>
                                <Text
                                    style={{
                                        color: 'black',
                                        marginLeft: 20,
                                    }}>
                                    City: {item.city}
                                </Text>
                                <Text
                                    style={{
                                        color: 'black',
                                        marginLeft: 20,
                                    }}>
                                    Building: {item.building}
                                </Text>
                                <Text
                                    style={{
                                        color: 'black',
                                        marginLeft: 20,
                                        marginBottom: 10,
                                    }}>
                                    Pin Code: {item.pinCode}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    borderWidth: 1,
                                    padding: 7,
                                    marginRight: 20,
                                    borderRadius: 5,
                                }}
                                onPress={() => dispatch(removeAddress(index))}>
                                <Text
                                    style={{
                                        color: 'black',
                                    }}>
                                    Delete address
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default MyAddress;
