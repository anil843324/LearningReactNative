import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Cross = () => {
    return (
        <View style={styles.cross}>
            <View style={styles.crossLine} />
            <View
                style={[styles.crossLine, styles.crossLineReversed]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cross: {
        flex: 1,
    },
    crossLine: {
        position: 'absolute',
        left: '48%',
        width: 10,
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
        transform: [{ rotate: '45deg' }],
    },
    crossLineReversed: {
        transform: [{ rotate: '-45deg' }],
    },
})



export default Cross

