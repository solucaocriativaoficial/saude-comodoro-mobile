import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator} from 'react-native'
import Style from './style'
import api from '../../api'

import Header from '../../components/header'

function Cases({navigation}){
    const [cases, setCases] = useState([])
    const [empty, setEmpty] = useState('')
    useEffect(() => {
        async function getContent(){
            const responseCases = await api.get('./cases')
            const {status, data} = responseCases
            if(status === 200 && data.success === true)
            setCases(data.content)

            if(!data.success)
            setEmpty(data.message)
        }
        getContent()
    }, [])
    if(!cases.length)
    return(
        <>
        <Header navigation={navigation} title="Casos de COVID-19"/>
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
        <Header navigation={navigation} title="Casos de COVID-19"/>
        <View style={Style.container}>
            <FlatList
                data={cases}
                renderItem={
                    ({item}) => <View style={Style.post}>
                        <Text style={Style.post_title}>{item.local}</Text>
                        <View style={Style.barTitle}/>
                        <View style={Style.boxControlInfo}>
                            <View style={Style.boxInfo}>
                                <Text style={Style.titleinfo}>Confirmados</Text>
                                <Text style={Style.info}>{item.confirmeds}</Text>
                            </View>
                            <View style={Style.boxInfo}>
                                <Text style={Style.titleinfo}>Suspeitos</Text>
                                <Text style={Style.info}>{item.suspects}</Text>
                            </View>
                            <View style={Style.boxInfo}>
                                <Text style={Style.titleinfo}>Mortes</Text>
                                <Text style={Style.info}>{item.deads}</Text>
                            </View>
                        </View>
                    </View>
                    }
                    keyExtractor={item => item._id}
            />
        </View>
        </>
    )
}

export default Cases