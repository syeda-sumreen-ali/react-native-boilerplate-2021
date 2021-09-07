import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  DrawerList,
  IconCompo,
  initialDrawer,
  DrawerListNav,
} from './drawerList';
import {
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, hp, wp} from '../constants';
import icons from '../constants/icons';

const Logout = () => {
  return alert('Logged Out...!');
};

function CustomDrawerContent(props) {
  const dp =
    'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
  return (
    <DrawerContentScrollView {...props}>
      {/* <Image 
      style={{width:'100%', resizeMode:'cover', transform:[{scaleX:-1}], top:200, left:30, position:'absolute', height:'100%', opacity:0.05}}
      source={{uri:"https://toppng.com/uploads/preview/exercise-png-11553981592o5piw0mrxs.png"}}/> */}
      <View style={styles.menuContainer}>
        <Image style={styles.userImg} source={{uri: dp}} />
        <View style={styles.nameBtn}>
          <Text style={styles.name}>Alisha John</Text>
          {/* <View style={{marginLeft:wp(10)}}>
          <Ratings/>
          <Text>Karachi, Pakistan</Text>
          </View> */}
          {/* <Button title='Settings' btnStyle={{backgroundColor:'gray',width:wp(30),height:hp(4),marginLeft:wp(10),borderRadius:5}} btnTextStyle={{fontSize:14}} /> */}
          <Text style={{color: 'gray', marginLeft: wp(4)}}>
            AlishaJohn@example.com
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <View style={{marginLeft: wp(10)}}>
            <icons.Ionicons name="close" size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: hp(4), flex: 1, marginLeft: wp(2)}}>
        {DrawerList.map((route, index) => (
          // <DrawerItem key={index} label={route.name} onPress={()=>props.navigation.navigate(route.name)} icon={()=> <IconCompo iname={route.iname}/>}

          // />
          <TouchableOpacity
            onPress={() =>
              route.nav === 'logout'
                ? Logout()
                : props.navigation.navigate(route.nav)
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: wp(5),
              width: wp(100),
              marginTop: hp(2),
            }}>
            <IconCompo iname={route.iname} />
            <Text style={[styles.itemName]}>{route.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName={initialDrawer}
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerStyle: isLargeScreen ? null : {width: '100%'},
        overlayColor: 'rgba(0,0,0,0.1)',
        // drawerStyle:{elevation:10, width:'100%'}
      }}>
      {DrawerListNav.map((route, index) => (
        <Drawer.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
            drawerIcon: ({focused, size}) => <IconCompo iname={route.iname} />,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
export default DrawerNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    height: hp(20),
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  name: {
    marginTop: hp(5),
    marginLeft: wp(-15),
    fontSize: 18,
    fontWeight: 'bold',
    ...FONTS.small_r,
  },
  userImg: {
    height: wp(25),
    width: wp(25),
    marginLeft: wp(5),
    borderRadius: wp(4),
    marginTop: hp(2),
  },
  nameBtn: {
    alignItems: 'center',
  },
  itemName: {
    paddingLeft: wp(5),
    width: wp(80),
    fontSize: 15,
  },
});
