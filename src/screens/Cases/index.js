import React from 'react'
import {View, Text} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Cases({navigation}){
    return(
        <>
        <Header navigation={navigation} title="Casos de COVID-19"/>
        <Text>Cases</Text>
        </>
    )
}

export default Cases