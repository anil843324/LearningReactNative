import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

import CommonButton from '../components/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const cartData = useSelector(state => state.reducers.cartRedux);

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
            }}>
            {cartData.length > 0 ? (
                <FlatList
                    data={cartData}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => {
                        return <CartItem item={item} index={index} />;
                    }}
                />
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'black',
                            fontWeight: '600',
                        }}>
                        No Items Added In cart
                    </Text>
                </View>
            )}

            {cartData.length > 0 ? (
                <View
                    style={{
                        marginBottom: 80,
                    }}>
                    <CommonButton
                        title={'Checkout'}
                        textColor={'#fff'}
                        bgColor={'green'}
                        onPress={() => {
                            navigation.navigate('Checkout')
                        }}
                    />
                </View>
            ) : null}
        </View>
    );
};

export default Cart;
