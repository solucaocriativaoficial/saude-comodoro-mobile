import React from 'react'
import {View, Text} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Dicas({navigation}){
    return(
        <>
        <Header navigation={navigation} title="Dicas"/>
        <Text>Dicas</Text>
        </>
    )
}

export default Dicas