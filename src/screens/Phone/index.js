import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, Linking} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Phone({navigation}){
    const [phones, setPhones] = useState([])
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        async function getContent(){
            const responsePhones = await api.get('./phone')
            const {status, data} = responsePhones
            if(status === 200 && data.success === true)
            setPhones(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(empty !== '')
    return(
        <>
        <Header navigation={navigation} title="Contatos de Telefones"/>
        <View style={Style.container}>
            <View style={Style.box_empty}>
                <Text style={Style.empty}>{empty}</Text>
            </View>
        </View>
        </>
    )

    return(
        <>
        <Header navigation={navigation} title="Contatos de Telefones"/>
        <View style={Style.container}>
            <FlatList
                data={phones}
                renderItem={
                    ({item}) => <View style={Style.post}>
                        <Text style={Style.post_title}>{item.name}</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`tel:${item.number_phone}`)
                        }}>
                            <Text style={Style.post_content}>{item.number_phone}</Text>
                        </TouchableOpacity>
                    </View>
                    }
                    keyExtractor={item => item._id}
            />
        </View>
        </>
    )
}

export default Phone