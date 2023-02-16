import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native'

const ToDo = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.body}>

            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.navigate("Task") }}
            >
                <Image

                    style={styles.icon}
                    source={require('../../assets/plus.png')}
                />

            </TouchableOpacity>


        </View>
    )
}

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

    }
    ,
    icon: {
        height: 20,
        width: 20,
        tintColor: 'white'
    }

})


export default ToDo