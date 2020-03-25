import React from 'react'
import StylePattern from '../components/StylePattern'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'

import Cases from '../screens/Cases'
import Decress from '../screens/Decress'
import Dicas from '../screens/Dicas'
import Phone from '../screens/Phone'
import Postos from '../screens/Postos'
import Developer from '../screens/Developer'

//assets
import logo_developer from '../assets/icon-developer.png'

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
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 5,
                borderColor: StylePattern.colors.primary,
                height: 100,
                marginBottom: 30,
            }}>
                <Text style={{
                    color: StylePattern.colors.primary,
                    fontWeight: 'bold',
                    fontSize: 23,
                }}>Saúde de Comodoro</Text>
            </View>
            <DrawerItemList {...props}/>
            <View style={{
                flex:1,
                justifyContent: 'flex-end',
                padding: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity onPress={() => {
                        
                    }}>
                        <Image source={logo_developer} style={{width: 40,height: 40, marginRight: 10}}/>
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
                <Stack.Screen name="Postos" component={Postos}/>
                <Stack.Screen name="Developer" component={Developer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouterScreens;