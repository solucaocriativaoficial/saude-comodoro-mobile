import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity, Linking, Image} from 'react-native'
import Style from './style'
import api from '../../api'
import iconWhatsapp from '../../assets/icon-whatsapp1x.png'
import iconPhone from '../../assets/icon-phone1x.png'
import Header from '../../components/header'

function Phone({navigation}){
    const [phones, setPhones] = useState([])
    const [empty, setEmpty] = useState('Carregando')
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
    if(!phones.length)
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
                    ({item}) => 
                    <View style={Style.post}>
                        <View style={Style.content}>
                            <Text style={Style.post_title}>{item.name}</Text>
                            <Text style={Style.post_content}>{item.number_phone}</Text>
                        </View>
                        <View style={Style.boxControlIconPhone}>
                            <TouchableOpacity style={Style.btnIcon} onPress={() => {
                                const phoneClear = item.number_phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')
                                const url = `https://api.whatsapp.com/send?phone=55${phoneClear}&text=Oi`
                                Linking.openURL(`${url}`)
                            }}>
                                <Image style={Style.iconActions} source={iconWhatsapp}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.btnIcon} onPress={() => {
                                Linking.openURL(`tel:${item.number_phone}`)
                            }}>
                                <Image style={Style.iconActions} source={iconPhone}/>
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

export default Phone