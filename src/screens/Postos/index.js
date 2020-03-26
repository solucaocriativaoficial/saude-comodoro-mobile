import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Postos({navigation}){
    const [postos, setPostos] = useState([])
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        async function getContent(){
            const responsePostos = await api.get('./postos')
            const {status, data} = responsePostos
            if(status === 200 && data.success === true)
            setPostos(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(empty !== '')
    return(
        <>
        <Header navigation={navigation} title="Postos de Saúde"/>
        <View style={Style.container}>
            <View style={Style.box_empty}>
                <Text style={Style.empty}>{empty}</Text>
            </View>
        </View>
        </>
    )

    else
    return(
        <>
        <Header navigation={navigation} title="Postos de Saúde"/>
        <View style={Style.container}>
            <FlatList
                data={postos}
                renderItem={
                    ({item}) => <View style={Style.post}>
                        <Text style={Style.post_title}>{item.name}</Text>
                        <View style={Style.barTitle}/>
                        <View style={Style.boxInfo}>
                            <Text style={Style.titleInfo}>Horários de funcionamento</Text>
                            <Text style={Style.info}>{item.open} ás {item.close}</Text>
                        </View>
                        <View style={Style.boxInfo}>
                            <Text style={Style.titleInfo}>Postos que serão atendidos</Text>
                            <View>
                                {item.postos_merger.map(e => <View>
                                    <Text style={Style.info}>{e}</Text>
                                </View>)}
                            </View>
                        </View>
                    </View>}
                    keyExtractor={item => item._id}
            />
        </View>
        </>
    )
}

export default Postos