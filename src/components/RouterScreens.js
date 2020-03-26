import React from 'react'
import StylePattern from '../components/StylePattern'
import {View, Image, TouchableOpacity, Linking} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'

import Cases from '../screens/Cases'
import Decress from '../screens/Decress'
import Dicas from '../screens/Dicas'
import DicasDetail from '../screens/DicasDetail'
import Phone from '../screens/Phone'
import Postos from '../screens/Postos'
import Symptoms from '../screens/Symptoms'

//assets
import logo_developer from '../assets/icon-developer.png'
import logo from '../assets/logo-saude.png'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function customMenu(props){
    return(
        <DrawerContentScrollView {...props} style={{
            flex:1,
        }}
        contentContainerStyle={{
            flex: 1,
        }}
        >
            <View style={{
                flex:0.4,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                marginBottom: 30,
            }}>
                <Image source={logo} style={{
                    width: 135,
                    height: 115,
                }}/>
            </View>
            <DrawerItemList {...props} labelStyle={{
                fontWeight: "700",
            }}/>
            <View style={{
                flex:1,
                justifyContent: 'flex-end',
                padding: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'flex-end',
                    height: 50,
                }}>
                    <TouchableOpacity style={{
                        width: 50,
                        height: '100%',
                        backgroundColor: 'rgb(28,0,58)',
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                    }} onPress={() => {
                        Linking.openURL('https:www.facebook.com/solucaocriativaoficial')
                    }}>
                        <Image source={logo_developer} style={{width: 35,height: 35}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

function Menu(){
    return(
        <Drawer.Navigator
            drawerType="slide"
            drawerContentOptions={{
                activeBackgroundColor: "#fff",
                inactiveBackgroundColor: "#fff",
                activeTintColor: StylePattern.colors.primary,
                inactiveTintColor: StylePattern.colors.black_light,
            }}
            drawerContent={customMenu}>
            <Drawer.Screen name="Phone" component={Phone} options={{
                title: "Telefones de contato"
            }}/>
            <Drawer.Screen name="Postos" component={Postos} options={{
                title: "Postos de saúde"
            }}/>
            <Drawer.Screen name="Dicas" component={Dicas} options={{
                title: "Dicas de saúde"
            }}/>
            <Drawer.Screen name="Decress" component={Decress} options={{
                title: "Decretos"
            }}/>
            <Drawer.Screen name="Cases" component={Cases} options={{
                title: "Casos de Covid-19"
            }}/>
            <Drawer.Screen name="Symptoms" component={Symptoms} options={{
                title: "Sintomas"
            }}/>
        </Drawer.Navigator>
    )
}

function RouterScreens(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Phone">
                <Stack.Screen name="Phone" component={Menu}/>
                <Stack.Screen name="Cases" component={Cases}/>
                <Stack.Screen name="Decress" component={Decress}/>
                <Stack.Screen name="Dicas" component={Dicas}/>
                <Stack.Screen name="DicasDetail" component={DicasDetail}/>
                <Stack.Screen name="Postos" component={Postos}/>
                <Stack.Screen name="Symptoms" component={Symptoms}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterScreens;