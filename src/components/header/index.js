import React from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native'

import Style from './style'
import icon_menu from '../../assets/icon-menu.png'
import backgroundHeader from '../../assets/backgroundHeader.png'
function Header(props){
    return(
        <>
        <StatusBar
            hidden={true}
        />
        <ImageBackground source={backgroundHeader} style={Style.image_background}>
            <TouchableOpacity
                style={Style.btnMenu}
                onPress={() => {
                    props.navigation.openDrawer()
                }}
            >
                <Image source={icon_menu} style={Style.imgMenu}/>
            </TouchableOpacity>
            <View style={Style.boxTitle}>
                <Text style={Style.textTitle}>{props.title}</Text>
            </View>
        </ImageBackground>
        </>
    )
}

export default Header