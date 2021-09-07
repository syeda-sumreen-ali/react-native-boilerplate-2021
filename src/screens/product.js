import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ProfileInfo from '../components/modules/profileInfo'


const Product = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Product</Text>
            <Text>just calling here profile info component for dummy content purpose</Text>
            <ProfileInfo/>
            <TouchableHighlight onPress={()=>navigation.navigate('home')}>
                <Text>Go Home</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})
