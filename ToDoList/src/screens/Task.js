import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../utils/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Task = () => {
    const navigation = useNavigation();
    const { tasks, taskID } = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const [showBellModal, setShowBellModal] = useState(false);
    const [bellTime, setBellTime] = useState('1');

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [done, setDone] = useState(false);
    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        const Task = tasks.find(task => task.ID === taskID);

        if (Task) {
            setTitle(Task.Title);
            setDesc(Task.Desc);
            setDone(Task.Done);
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
                Done: done,
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

    const setTaskAlarm = () => {



    }







    return (
        <View style={styles.body}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showBellModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setShowBellModal(!showBellModal);
                }}>
                <View style={styles.centered_view}>
                    <View style={styles.bell_modal}>
                        <View style={styles.bell_body}>
                            <Text style={styles.textM} >Remind me After</Text>
                            <TextInput
                                style={styles.bell_input}
                                keyboardType={'numeric'}
                                placeholderTextColor="black"
                                value={bellTime}
                                onChangeText={text => setBellTime(text)}
                            />
                            <Text style={styles.textM} >minute(s)</Text>

                        </View>

                        <View style={styles.bell_buttons}>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowBellModal(false)
                                }}
                                style={styles.bell_cancel_button}
                            >
                                <Text style={styles.textM} >Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setShowBellModal(false)
                                }}
                                style={styles.bell_ok_button}
                            >
                                <Text style={styles.textM} >OK</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                </View>
            </Modal>

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
            <View style={styles.extra_row}>
                <TouchableOpacity style={styles.extra_button} onPress={() => { setShowBellModal(true) }}>
                    <Image
                        style={{
                            height: 26,
                            width: 26,
                        }}
                        source={require('../../assets/bell.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={done}
                    onValueChange={setDone}
                    style={styles.checkbox}
                    tintColors={{ true: 'green', false: 'grey' }}
                />
                <Text style={styles.text}>Is Done</Text>
            </View>

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

    extra_row: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    extra_button: {
        flex: 1,
        height: 50,
        backgroundColor: '#0080ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 10,
    },

    checkbox: {
        borderColor: 'green',
    },
    text: {
        fontSize: 20,
        color: '#000000',
    },
    centered_view: {
        flex: 1,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center'


    },
    bell_modal: {
        width: 300,
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000000'
    },
    bell_body: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',

    }
    ,
    bell_buttons: {
        flexDirection: 'row',
        height: 50,

    },
    bell_input: {
        width: 50,
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: 'black',
    },
    textM: {
        color: 'black',

    },
    bell_ok_button: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#000000',
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell_cancel_button: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#000000',
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Task;
