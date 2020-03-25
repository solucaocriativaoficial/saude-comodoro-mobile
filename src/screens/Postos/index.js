import React from 'react'
import {View, Text} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Postos({navigation}){
    return(
        <>
        <Header navigation={navigation} title="Postos de Saúde"/>
        <Text>Postos</Text>
        </>
    )
}

export default Postos