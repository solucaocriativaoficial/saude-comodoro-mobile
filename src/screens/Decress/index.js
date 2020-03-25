import React from 'react'
import {View, Text} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Decress({navigation}){
    return(
        <>
        <Header navigation={navigation} title="Decretos"/>
        <Text>Decress</Text>
        </>
    )
}

export default Decress