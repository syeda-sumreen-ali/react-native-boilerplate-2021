import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, wp } from '../../constants'

import {TextInput} from 'react-native-paper';

const TextField = (props) => {

    // destruct the props here and use it to make the component reusable
    const { value,mode, placeholder,onTermChange, label, labelStyle, inputStyle, keyboardType = 'default', secureText = false } = props

    return (
        <View>
            <Text style={[styles.label,  labelStyle]}>{label}</Text>
            <TextInput
                mode={mode}
                
                secureTextEntry={secureText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                style={[styles.input, inputStyle]}
                value={value}
                onChangeText={val => onTermChange(val)} />
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({

    input:{
        width:wp(90), // width 90 percent wp is a method that return width % similary hp returns height %
        height:60,
        backgroundColor:COLORS.lightBg2, // you can use any color this is the way you can call the colors 
        ...FONTS.body1_r , // this way you can use styling object it will adjust the font family and fontSize
        letterSpacing:0.27,
        marginBottom:'4%'
     
        
    }
})