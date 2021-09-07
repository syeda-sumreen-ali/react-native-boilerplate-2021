import React from 'react'
import ICONS from "../constants/icons";
import { Home,Product } from '../screens';
import {View} from 'react-native'
// export const initialRouteName = 'splash';
export const initialDrawer = 'home';  //for sample test right now I set the initialRoute to login


export const DrawerList = [
    {name:'home',component:Home,iname:'home-outline',nav:'home'},
    // {name:'dummyPage',component:DummyPage ,iname:'albums-outline',nav:'dummyPage'},
    {name:'product',component:Product ,iname:'ribbon-outline',nav:'product'},
  
    {name:'Logout',component:<View></View>,iname:'arrow-back-circle-outline',nav:'logout'},
   

  
];
export const DrawerListNav = [
  {name:'home',component:Home,},
  {name:'dummyPage',component:Product,},
  {name:'product',component:Product,}
];

export const IconCompo=({iname})=>{
    return(
      
                <ICONS.Ionicons
                   name={iname}
                   size={25}
                   color='gray'
                />
             
    )
  }
