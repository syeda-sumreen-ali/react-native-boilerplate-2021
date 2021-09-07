import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text,ScrollView, TouchableHighlight, View } from 'react-native'

import { getFont, SIZES } from '../constants'

const Home = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <Text>I'm Homes</Text>

          
            <TouchableHighlight style={{backgroundColor:'pink'}} onPress={()=>navigation.navigate('product')}>
                <Text>Visit Product</Text>
            </TouchableHighlight>
         
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})
