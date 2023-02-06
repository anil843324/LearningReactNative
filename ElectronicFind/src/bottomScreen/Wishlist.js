import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WishListItem from '../components/WishListItem'
import { removeFromWishlist } from '../redux/actions/Actions';

const WishList = () => {
    const wishListData = useSelector(state => state.reducers2);

    const dispatch = useDispatch();

    return (
        <View
            style={{
                flex: 1,
            }}>
            <FlatList
                data={wishListData}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <WishListItem
                            item={item}

                            index={index}

                        />
                    );
                }}
            />
        </View>
    );
};

export default WishList;
