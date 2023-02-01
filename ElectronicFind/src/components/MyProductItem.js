import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyProductItem = ({ item }) => {
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
                        borderWidth: 1,

                        borderRadius: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 7,
                        paddingBottom: 7,
                    }}>
                    <Text style={{ color: 'black', fontWeight: '600' }}>Add to cart</Text>
                </TouchableOpacity>
            </View>





            {/* 
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 5,
                    position: 'relative',
                    top: 0,
                    right: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    style={{ width: 24, height: 24 }}
                    source={require('../images/heart.png')}
                />

            </TouchableOpacity> */}



        </View>
    );
};

export default MyProductItem;
