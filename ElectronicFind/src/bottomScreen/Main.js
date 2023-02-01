import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import { products } from '../Products';
import { FlatList } from 'react-native-gesture-handler';
import MyProductItem from '../components/MyProductItem';

const Main = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [laptopList, setLaptopList] = useState([]);
    const [mobileList, setMobileList] = useState([]);
    const [earphoneList, setEarphoneList] = useState([]);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        let tempCategory = [];
        products.category.map(items => {
            tempCategory.push(items);
        });
        setCategoryList(tempCategory);

        setMobileList(products.category[0].data);
        setLaptopList(products.category[1].data);
        setEarphoneList(products.category[2].data);
        setWatchList(products.category[3].data);
    }, []);

    return (
        <ScrollView
            style={{
                flex: 1
            }}
        >

            <View
                style={{
                    flex: 1,
                }}>
                <Header />

                <Image
                    source={require('../images/banner.jpg')}
                    style={{
                        width: '94%',
                        resizeMode: 'contain',
                        height: 200,
                        borderRadius: 10,
                        alignSelf: 'center',
                        marginTop: 10,
                    }}
                />

                {/* category listing */}
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categoryList}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        padding: 10,
                                        borderWidth: 1,
                                        marginLeft: 20,
                                        borderRadius: 20,
                                    }}>
                                    <Text
                                        style={{
                                            color: 'black',
                                        }}>
                                        {item.category}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                <Text
                    style={{
                        marginTop: 20,
                        marginLeft: 20,
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600'
                    }}
                >New Mobile 👍 </Text>

                {/* products listing */}
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={mobileList}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }}
                    />
                </View>

                <Text
                    style={{
                        marginTop: 20,
                        marginLeft: 20,
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600'
                    }}
                >New Laptop 👍 </Text>

                {/* products listing */}
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={laptopList}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }}
                    />
                </View>

                <Text
                    style={{
                        marginTop: 20,
                        marginLeft: 20,
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600'
                    }}
                >New Earphone 👍 </Text>

                {/* products listing */}
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={earphoneList}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }}
                    />
                </View>
                <Text
                    style={{
                        marginTop: 20,
                        marginLeft: 20,
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '600'
                    }}
                >New Smart Watch 👍 </Text>

                {/* products listing */}
                <View style={{ marginTop: 20, marginBottom: 100 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={watchList}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }}
                    />
                </View>




            </View>
        </ScrollView>
    );
};

export default Main;
