import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Dicas({navigation}){
    const [dicas, setDicas] = useState([])
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        async function getContent(){
            const responseDicas = await api.get('./dicas')
            const {status, data} = responseDicas
            if(status === 200 && data.success === true)
            setDicas(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(!dicas.length)
    return(
        <>
        <Header navigation={navigation} title="Dicas de Saúde"/>
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
        <Header navigation={navigation} title="Dicas de Saúde"/>
        <View style={Style.container}>
            <FlatList
                data={dicas}
                renderItem={
                    ({item}) => 
                    <TouchableOpacity onPress={() => {
                        navigation.push("DicasDetail", {
                            id: item._id
                        })
                    }}>
                        <View style={Style.post}>
                            <Text style={Style.post_title}>{item.name}</Text>
                            <Text style={Style.post_content}>{item.article}</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => item._id}
            />
        </View>
        </>
    )
}

export default Dicas