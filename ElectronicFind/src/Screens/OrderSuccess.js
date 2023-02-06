import { View, Text, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OrderSuccess = () => {
    const orderData = useSelector(state => state.orderReducer);

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                style={{
                    height: 64,
                    width: 64,
                }}
                source={
                    route.params.status === 'success'
                        ? require('../images/success.png')
                        : require('../images/failed.png')
                }
            />

            <Text
                style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: 20,
                    marginTop: 10,
                }}>
                {' '}
                {route.params.status === 'success'
                    ? 'Your Order Placed Successfully 😁!'
                    : 'Order Failed'}
            </Text>

            <TouchableOpacity
                style={{
                    width: 200,
                    height: 50,
                    marginTop: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                }}
                onPress={() => {
                    navigation.navigate('Home');
                }}>
                <Text
                    style={{
                        color: 'black',
                    }}>
                    {' '}
                    Go to Home
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default OrderSuccess;
