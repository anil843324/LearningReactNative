import { View, Text, Image, ToastAndroid } from 'react-native';
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
const ProductList = ({ item, }) => {

    //onAddToCart


    const dispatch = useDispatch()





    return (
        <View
            style={{
                width: 250,
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
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        dispatch(addToWishlist(item));
                    }}

                >
                    <Image
                        style={{ width: 24, height: 24 }}
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
                        dispatch(addItemToCart(item));
                    }}
                >
                    <Text style={{ color: 'black', fontWeight: '600' }}

                    >Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductList;
