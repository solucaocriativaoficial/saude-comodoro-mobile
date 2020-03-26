import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, Linking} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Decress({navigation}){
    const [decress, setDecress] = useState([])
    const [empty, setEmpty] = useState('Carregando')
    useEffect(() => {
        async function getContent(){
            const responseDecress = await api.get('./decress')
            const {status, data} = responseDecress
            if(status === 200 && data.success === true)
            setDecress(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(!decress.length)
    return(
        <>
        <Header navigation={navigation} title="Decretos"/>
        <View style={Style.container}>
            <View style={Style.box_empty}>
                <Text style={Style.empty}>{empty}</Text>
            </View>
        </View>
        </>
    )

    return(
        <>
        <Header navigation={navigation} title="Decretos"/>
        <View style={Style.container}>
            <FlatList
                data={decress}
                renderItem={
                    ({item}) => <View style={Style.post}>
                        <Text style={Style.post_title}>{item.title}</Text>
                        <View style={Style.barTitle}/>
                        <Text style={Style.titleInfo}>{item.local}</Text>
                        <View style={Style.boxInfo}>
                            <Text style={Style.titleDescribe}>Descrição</Text>
                            <Text style={Style.info}>{item.describe}</Text>
                        </View>
                        <View style={Style.boxBtnShow}>
                            <TouchableOpacity style={Style.btnShow} onPress={() => {
                                Linking.openURL(item.link)
                            }}>
                                <Text style={Style.textBtnShow}>Ver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    }
                    keyExtractor={item => item._id}
            />
        </View>
        </>
    )
}

export default Decress