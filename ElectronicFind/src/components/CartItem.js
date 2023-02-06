import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    addItemToCart,
    addToWishlist,
    removeFromCart,
} from '../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
const CartItem = ({ item, index, isWishList }) => {
    //onAddToCart

    const dispatch = useDispatch();

    return (
        <View
            style={{
                width: '90%',
                height: 280,
                borderRadius: 10,
                elevation: 5,
                backgroundColor: '#fff',
                marginLeft: 20,
                marginBottom: 10,
            }}>
            <Image
                source={item.image}
                style={{
                    width: '100%',
                    height: '60%',
                    resizeMode: 'contain',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            />
            <Text
                style={{
                    color: 'black',
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 18,
                    fontWeight: '600',
                }}>
                {item.name}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 10,
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '600',
                    }}>
                    {'₹' + item.price}
                </Text>

                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        dispatch(addToWishlist(item));
                    }}>
                    <Image
                        style={{
                            width: 24, height: 24,
                            tintColor: '#000'
                        }}
                        source={require('../images/heart.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 7,
                        paddingBottom: 7,
                    }}
                    onPress={() => {
                        dispatch(removeFromCart(item.id));
                    }}>
                    <Text style={{ color: 'black', fontWeight: '600' }}>Remove Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
