import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const Orders = () => {


    const orders = useSelector(state => state.orderReducer);


    console.log(orders[1].items)


    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <View style={{
                flex: 1,
                marginTop: 15,
            }} >

                <FlatList

                    data={orders[1].items}


                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: '100%',
                                    height: 100,

                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderBottomWidth: 1,
                                    paddingBottom: 10,

                                }}
                            >
                                <Image
                                    style={{
                                        height: 100,
                                        width: 100,
                                        resizeMode: 'contain'
                                    }}
                                    source={item.image}
                                />
                                <View>

                                    <Text
                                        style={{
                                            marginLeft: 20,
                                            fontSize: 18,
                                            color: 'black'
                                        }}
                                    >{item.name}</Text>
                                    <Text
                                        style={{
                                            marginLeft: 20,
                                            fontSize: 18,
                                            color: 'black'
                                        }}
                                    > Rs. {item.price}</Text>

                                </View>






                            </View>
                        )
                    }}
                />


            </View>

        </SafeAreaView>
    )
}

export default Orders