import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

export default function Symptoms({navigation}){
    const [symptoms, setSymptoms] = useState([])
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        async function getContent(){
            const responseRequest = await api.get('./symptoms')
            const {status, data} = responseRequest
            if(status === 200 && data.success === true)
            setSymptoms(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(!symptoms.length)
    return(
        <>
        <Header navigation={navigation} title="Sintomas"/>
        <View style={Style.container}>
            <View style={Style.box_empty}>
                {
                    empty === '' ?
                    <ActivityIndicator size="large"/>
                    :
                    <Text style={Style.empty}>{empty}</Text>
                }
            </View>
        </View>
        </>
    )

    return(
        <>
        <Header navigation={navigation} title="Sintomas"/>
        <View style={Style.container}>
            <FlatList
                data={symptoms}
                renderItem={
                    ({item}) => 
                    <View style={Style.post}>
                            <Text style={Style.info}>{item.symptoms}</Text>
                    </View>}
                    keyExtractor={item => item._id}
            />
        </View>
        </>
    )
}