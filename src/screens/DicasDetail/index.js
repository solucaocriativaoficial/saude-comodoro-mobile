import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import Style from './style'
import api from '../../api'

function DicasDetail({route, navigation}){
    const [dicasDetail, setDicasDetail] = useState('')
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        async function getContent(){
            const responseDicas = await api.get(`/dicas/1/${route.params.id}`)
            const {status, data} = responseDicas
            if(status === 200 && data.success === true)
            setDicasDetail(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(dicasDetail === '')
    return(
        <>
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

    else
    return(
        <>
        <View style={Style.container}>
            <View style={Style.post}>
                <Text style={Style.post_title}>{dicasDetail.name}</Text>
                <Text style={Style.post_content}>{dicasDetail.article}</Text>
            </View>
            <View style={Style.boxBtn}>
                <TouchableOpacity style={Style.btnBack} onPress={() => {
                    navigation.goBack()
                }}>
                    <Text style={Style.textBtn}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default DicasDetail