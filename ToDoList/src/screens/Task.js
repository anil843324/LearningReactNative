import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../utils/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Task = () => {
    const navigation = useNavigation();
    const { tasks, taskID } = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        const Task = tasks.find(task => task.ID === taskID);

        if (Task) {
            setTitle(Task.Title);
            setTitle(Task.Desc);
        }
    };

    const setTask = () => {
        if (title.length == 0) {
            Alert.alert('Warning!', 'Please write your task title.');
        }

        try {
            let Task = {
                ID: taskID,
                Title: title,
                Desc: desc,
            };
            let newTasks = [];
            const index = tasks.findIndex(task => task.ID === taskID);

            if (index > -1) {
                newTasks = [...tasks];
                newTasks[index] = Task;
            } else {
                newTasks = [...tasks, Task];
            }

            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                    Alert.alert('Success!', 'Task saved successfully.');
                    navigation.goBack();
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.body}>
            <TextInput
                value={title}
                placeholderTextColor="black"
                placeholder="Title"
                style={styles.input}
                onChangeText={text => setTitle(text)}
            />
            <TextInput
                value={desc}
                placeholderTextColor="black"
                placeholder="Description"
                multiline
                style={styles.input}
                onChangeText={text => setDesc(text)}
            />

            <CustomButton
                bgColor={'green'}
                textColor={'white'}
                title={'Save Task'}
                onPress={() => {
                    setTask();
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: 'black',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#555555',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        paddingHorizontal: 10,
        color: 'black',
    },
});

export default Task;
