import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { hp, wp } from '../../constants'
import icons from '../../constants/icons'

const header = ({open,name}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>open()}><icons.Feather color='black' name='menu' size={30} style={styles.iconStyle} color='#05a7c6'/></TouchableOpacity>
            <Text style={styles.heading}>{name}</Text>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:wp(1),
        // marginTop:hp(5)  
    },
    iconStyle:{
       
    },
    heading:{
        marginLeft:wp(30),
        fontSize:20,
        fontWeight:'bold',
        
    }
})