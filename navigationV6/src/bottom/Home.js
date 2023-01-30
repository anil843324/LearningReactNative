import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    width: '100%',
                    height: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                    elevation: 3,
                    backgroundColor: 'white',
                }}>
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" color={'black'} size={40} />
                </TouchableOpacity>

                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '600',
                        marginLeft: 15,
                    }}>
                    React Navigation Demo
                </Text>
            </View>
            <Image
                style={{
                    width: '94%',
                    height: 170,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginTop: 20,
                }}
                source={{
                    uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                }}
            />
            <Text
                style={{
                    color: 'black',
                    marginLeft: 15,
                    fontSize: 18,
                    fontWeight: '600',
                    marginTop: 20,
                }}>
                Indian Thaali (Food)
            </Text>



        </View>
    );
};

export default Home;
