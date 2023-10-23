import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import WyszukajScreen from '../../../scenes/Wyszukaj/Wyszukaj'
import BiletScreen from '../../../scenes/Bilet/Bilet'
import ProfileScreen from '../../../scenes/profile/Profile'
import RejestracjaScreen from '../../../scenes/rejestracja/Rejestracja'
import Film1Screen from '../../../scenes/film1'
import Film_VenomScreen from '../../../scenes/film_venom'
import Film_EternalsScreen from '../../../scenes/film_eternals'
import Film_SuicideScreen from '../../../scenes/film_suicide'
import Film_SweetScreen from '../../../scenes/film_sweet/Film_Sweet'
import SkanerScreen from '../../../scenes/Skaner'
import PodsumowanieScreen from '../../../scenes/podsumowanie'

import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { color } from 'react-native-reanimated'


const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Film1')
  newState.routes = newState.routes.filter((item) => item.name !== 'Film_Venom')
  newState.routes = newState.routes.filter((item) => item.name !== 'Film_Eternals')
  newState.routes = newState.routes.filter((item) => item.name !== 'Film_Suicide')
  newState.routes = newState.routes.filter((item) => item.name !== 'Film_Sweet')
  newState.routes = newState.routes.filter((item) => item.name !== 'Bilet')
  newState.routes = newState.routes.filter((item) => item.name !== 'Profil')
  newState.routes = newState.routes.filter((item) => item.name !== 'Podsumowanie')
  return (
    <DrawerContentScrollView  {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator drawerStyle={{ backgroundColor: "#262626" }} 
  drawerContentOptions={{ 
    inactiveTintColor: 'darkgray',
    activeTintColor:'#dc2626'
  }}
   initialRouteName="Home" 
  drawerContent={DrawerMenuContainer}>
    <Drawer.Screen 
    name="Repertuar" 
    component={TabNavigator} 
    options={{drawerIcon:({color})=>(
    <FontIcon name="film" size={20} color="red"/>)}}/>
    <Drawer.Screen 
     name="Wyszukaj" 
     component={WyszukajScreen} 
     options={{drawerIcon:({color})=>(
     <FontIcon name="search" size={20}  color="red"/>)}}/>
    <Drawer.Screen 
    name="Profil" 
    component={ProfileScreen} 
    options={{drawerIcon:({color})=>(
    <FontIcon name="user" size={20}  color="red"/>)}}/>
<Drawer.Screen 
    name="Rejestracja" 
    component={RejestracjaScreen} 
    options={{drawerIcon:({color})=>(
    <FontIcon name="user" size={20}  color="red"/>)}}/>
    <Drawer.Screen 
    name="Skaner" 
    component={SkanerScreen} 
    options={{drawerIcon:({color})=>(
    <FontIcon name="expand" size={20}  color="red"/>)}}/>
    <Drawer.Screen 
    name="Film1" 
    component={Film1Screen}/>
    <Drawer.Screen 
    name="Film_Venom" 
    component={Film_VenomScreen}/>
    <Drawer.Screen 
    name="Film_Eternals" 
    component={Film_EternalsScreen}/>
    <Drawer.Screen 
    name="Film_Suicide" 
    component={Film_SuicideScreen}/>
    <Drawer.Screen 
    name="Film_Sweet" 
    component={Film_SweetScreen}/>
    <Drawer.Screen 
    name="Bilet" 
    component={BiletScreen}/>
    <Drawer.Screen 
    name="Podsumowanie" 
    component={PodsumowanieScreen}/>
  </Drawer.Navigator>
)




export default DrawerNavigator


