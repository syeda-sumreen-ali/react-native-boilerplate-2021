import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS, ICONS } from '../constants'

const DummyPage = () => {
    return (
        <SafeAreaView style={styles.container}>

            <Text>DummyPage</Text>
            <Text style= {{ textAlign: 'center' }}>
                drag right to open the drawer also  you can add a button and control drawer toggleing through it</Text>
            <ICONS.AntDesign name={'home'} size={40} color={COLORS.black1} />
        </SafeAreaView>
    )
}

export default DummyPage

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})
