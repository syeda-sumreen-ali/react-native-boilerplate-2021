import React from 'react'
import {View, Text} from 'react-native'
import {Home} from '../screens'
import DrawerNav from "./drawerNav";

export const initialRouteName = 'drawer';
// export const initialRouteName = 'splash';  //for sample test right now I set the initialRoute to login


// export const DrawerNav = ()=><View>
//     <Text>drawer screen</Text>
// </View>

export const RouteList = [
    {name:'home',component:Home},
    {name:'drawer',component:DrawerNav},
    
];
