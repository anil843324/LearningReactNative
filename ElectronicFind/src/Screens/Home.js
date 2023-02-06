import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Main from '../bottomScreen/Main';
import Profile from '../bottomScreen/Profile';
import Wishlist from '../bottomScreen/Wishlist';
import Search from '../bottomScreen/Search';
import Cart from '../bottomScreen/Cart';
import { useSelector } from 'react-redux';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const cartData = useSelector(state => state.reducers.cartRedux)
    const cartData1 = useSelector(state => state.reducers)
    const wishListData = useSelector(state => state.reducers2)

    // console.log('cart data', cartData1)

    return (
        <View
            style={{
                flex: 1,
            }}>
            {selectedTab === 0 ? (
                <Main />
            ) : selectedTab === 1 ? (
                <Search />
            ) : selectedTab === 2 ? (
                <Cart />
            ) : selectedTab === 3 ? (
                <Wishlist />
            ) : (
                <Profile />
            )}

            <View
                style={{
                    width: '100%',
                    height: 70,
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 40,
                    paddingRight: 40,
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(0);
                    }}>
                    <Image
                        source={require('../images/home.png')}
                        style={{
                            width: 34,
                            height: 34,
                            tintColor: selectedTab === 0 ? '#000' : '#8e8e8e',
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(1);
                    }}>
                    <Image
                        source={require('../images/search.png')}
                        style={{
                            width: 34,
                            height: 34,
                            tintColor: selectedTab === 1 ? '#000' : '#8e8e8e',
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        style={{
                            width: 44,
                            height: 44,
                            backgroundColor: selectedTab === 2 ? 'green' : '#000',
                            borderRadius: 22,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setSelectedTab(2);
                        }}>
                        <Image
                            source={require('../images/bag.png')}
                            style={{
                                width: 34,
                                height: 34,
                                tintColor: '#fff',
                            }}
                        />

                        <View style={{
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: 5,
                            right: 5,

                        }}>
                            <Text
                                style={{
                                    color: "#fff",
                                    fontWeight: '600',

                                }}
                            >
                                {cartData.length}

                            </Text>


                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(3);
                    }}>
                    <Image
                        source={require('../images/heart.png')}
                        style={{
                            width: 34,
                            height: 34,
                            tintColor: selectedTab === 3 ? '#000' : '#8e8e8e',
                        }}
                    />
                    <View style={{
                        width: 20,
                        height: 20,
                        backgroundColor: 'red',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 15,
                        right: 1,

                    }}>
                        <Text
                            style={{
                                color: "#fff",
                                fontWeight: '600',

                            }}
                        >
                            {wishListData.length}

                        </Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(4);
                    }}>
                    <Image
                        source={require('../images/user2.png')}
                        style={{
                            width: 34,
                            height: 34,
                            tintColor: selectedTab === 4 ? '#000' : '#8e8e8e',
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
