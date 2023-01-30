import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

const Sidebar = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    height: 5,
                    width: '100%',
                    backgroundColor: 'grey',
                }}></View>
            <Image
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
                }}
                style={{
                    marginTop: 10,
                    alignSelf: 'center',
                    width: 90,
                    height: 90,
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '700',
                    alignSelf: 'center',
                    marginTop: 20,
                    color: 'black',
                }}>
                Anil Kumar
            </Text>

            <View style={{ marginTop: 50, width: '100%' }}>
                <FlatList
                    data={[
                        {
                            icon: require('./images/orders.png'),
                            title: 'Orders',
                        },
                        {
                            icon: require('./images/cart.png'),
                            title: 'Cart',
                        },
                        {
                            icon: require('./images/notification.png'),
                            title: 'Notifications',
                        },
                        {
                            icon: require('./images/support.png'),
                            title: 'Support',
                        },
                        {
                            icon: require('./images/share.png'),
                            title: 'Share App',
                        },
                        {
                            icon: require('./images/rating.png'),
                            title: 'Rate Us',
                        },
                    ]}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    height: 50,
                                }}
                                onPress={() => {
                                    navigation.closeDrawer()
                                    alert(item.title + ' selected')
                                }}
                            >
                                <Image
                                    source={item.icon}
                                    style={{
                                        marginLeft: 15,
                                        width: 24,
                                        height: 24,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 16,
                                        marginLeft: 15,
                                    }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default Sidebar;
