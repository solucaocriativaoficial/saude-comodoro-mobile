import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Phone({navigation}){
    const [phones, setPhones] = useState([])
    useEffect(() => {
        async function getContent(){
            const responsePhones = await api.get('./phone')
            const {status, data} = responsePhones
            if(status === 200 && data.success === true)
            setPhones(data.content)
        }
        getContent()
    }, [])
    return(
        <>
        <Header navigation={navigation} title="Contatos de Telefones"/>
        <View style={Style.container}>
            <FlatList
                data={phones}
                renderItem={
                    ({item}) => <View style={Style.post}>
                        <Text style={Style.post_title}>{item.name}</Text>
                        <Text style={Style.post_content}>{item.number_phone}</Text>
                    </View>}
            />
        </View>
        </>
    )
}

export default Phone