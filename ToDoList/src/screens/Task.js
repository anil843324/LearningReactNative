import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../utils/CustomButton';

const Task = () => {
    const [title, setTitle] = useState();

    const [desc, setDesc] = useState();

    const dataSave = () => {
        console.log(title);
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
                    dataSave();
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
