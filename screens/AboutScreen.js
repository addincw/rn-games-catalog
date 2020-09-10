import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import appStyles from '../Styles';

function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={appStyles.text}>About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AboutScreen
