import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CommonButton from '../components/CommonButton';
import RazorpayCheckout from 'react-native-razorpay';
import { addOrder } from '../redux/actions/Actions';

const CheckOut = () => {
    const cartData = useSelector(state => state.reducers.cartRedux);
    addressList = useSelector(state => state.addressReducer);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [slectedAddress, setSlectedAddress] = useState('');

    const getTotal = () => {
        let tempTotal = 0;
        cartData.map(item => {
            tempTotal = tempTotal + item.price;
        });
        return tempTotal;
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <View>
                <FlatList
                    data={cartData}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: '100%',
                                    height: 70,
                                    flexDirection: 'row',
                                    marginTop: 10,
                                }}>
                                <Image
                                    source={item.image}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        marginLeft: 10,
                                        resizeMode: 'contain',
                                    }}
                                />

                                <View
                                    style={{
                                        padding: 10,
                                    }}>
                                    <Text
                                        style={{
                                            color: 'black',
                                            fontSize: 18,
                                        }}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            color: 'black',
                                            marginTop: 10,
                                        }}>
                                        {'₹' + item.price}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 30,
                        borderTopWidth: 1,
                        height: 50,
                        borderColor: '#8e8e8e',
                    }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Total :</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>
                        {'₹' + getTotal()}
                    </Text>
                </View>
                <View>
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
                                        onPress={() => {
                                            setSlectedAddress(
                                                `City : ${item.city} Building :${item.building}  PinCode :${item.pinCode}`,
                                            );
                                        }}>
                                        <Text
                                            style={{
                                                color: 'black',
                                            }}>
                                            Select address
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </View>

                <Text
                    style={{
                        margin: 20,
                        color: 'black',
                        fontSize: 18,
                    }}>
                    Selected Address
                </Text>

                <Text
                    style={{
                        marginLeft: 20,
                        color: 'black',
                        fontSize: 16,
                    }}>
                    {slectedAddress === ''
                        ? 'Please Select Address From Above List'
                        : slectedAddress}
                </Text>

                <CommonButton
                    bgColor={'black'}
                    textColor={'white'}
                    title={'Place Order'}
                    onPress={() => {
                        var options = {
                            description: 'Credits towards consultation',
                            image:
                                'https://user-images.githubusercontent.com/86958575/216921468-0c600efe-accd-4232-8cbe-5f8286baf657.png',
                            currency: 'INR',
                            key: 'rzp_test_0hE4fShT1FxgWO', // Your api key
                            amount: parseInt(getTotal()) * 100,
                            name: 'foo',
                            prefill: {
                                email: 'anilkumarsingh142200@gmailcom',
                                contact: '7255842110',
                                name: 'Razorpay Software',
                            },
                            theme: { color: 'black' },
                        };
                        RazorpayCheckout.open(options)
                            .then(data => {
                                // handle success
                                // alert(`Success: ${data.razorpay_payment_id}`);

                                dispatch(addOrder({ items: cartData, total: getTotal(), address: slectedAddress }))

                                navigation.navigate('OrderSuccess', {
                                    status: 'success',
                                });
                            })
                            .catch(error => {
                                // handle failure
                                // alert(`Error: ${error.code} | ${error.description}`);
                                navigation.navigate('OrderSuccess', {
                                    status: 'failed',
                                });
                            });
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default CheckOut;
