import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTaskId, setTasks } from '../redux/actions';

const ToDo = () => {
    const navigation = useNavigation();

    const { tasks } = useSelector(state => state.taskReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        AsyncStorage.getItem('Tasks')
            .then(tasks => {
                const parsedTasks = JSON.parse(tasks);
                if (parsedTasks && typeof parsedTasks === 'object') {
                    dispatch(setTasks(parsedTasks));
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <View style={styles.body}>

            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}

                        onPress={() => {
                            dispatch(setTaskId(item.ID))
                            navigation.navigate('Task')
                        }}
                    >

                        <Text style={styles.title}
                            numberOfLines={1}
                        > {item.Title} </Text>
                        <Text style={styles.desc}
                            numberOfLines={1}
                        > {item.Desc} </Text>

                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}

            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    dispatch(setTaskId(tasks.length + 1));
                    navigation.navigate('Task');
                }}>
                <Image style={styles.icon} source={require('../../assets/plus.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 5,
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: 'white',
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 7,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,

    },
    title: {
        color: '#000000',
        fontSize: 20,
        margin: 5,
    },
    desc: {
        color: '#999999',
        fontSize: 18,
        margin: 5,
    }
});

export default ToDo;
