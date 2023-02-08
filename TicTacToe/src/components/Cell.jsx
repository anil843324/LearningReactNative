import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Cross from './Cross'

const Cell = (props) => {

    const { cel, onPress } = props;

    return (
        <Pressable
            // key={columnIndex + rowIndex}
            onPress={() => onPress()}
            style={styles.cell}>
            {cel === 'o' && <View style={styles.circle} />}
            {cel === 'x' && <Cross />}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    circle: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,

        borderWidth: 10,
        borderColor: 'white',
    },
    cell: {
        width: 100,
        height: 100,
        flex: 1,
    },
})

export default Cell