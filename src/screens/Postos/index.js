import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard,
} from 'react-native'

import MapView, {Marker, Callout} from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import Style from './style'
import api from '../../api'
import Header from '../../components/header'
import icon_marker_postos from '../../assets/icon-marker-postos1x.png'
import icon_marker_my_position from '../../assets/icon-marker-my-position1x.png'
import icon_search from '../../assets/icon-search1x.png'

function Postos({navigation}){
    const [postos, setPostos] = useState([])
    const [empty, setEmpty] = useState('')
    const [currentRegion, setCurrentRegion] = useState({
        latitude: -13.65890725807256,
        latitudeDelta: 0.04486803536053863,
        longitude: -59.79191517457366,
        longitudeDelta: 0.034062378108487223,          
    })
    const [myPosition, setMyposition] = useState(null)
    const [filter, setFilter] = useState('')
    const [valueInput, setValueInput] = useState(null)
    const [showDetailMarker, setShowDetailMarker] = useState(false)

    useEffect(() => {
        async function getContent(){
            const granted = await requestPermissionsAsync()
            if(granted){
                const {coords} = await getCurrentPositionAsync();
                setMyposition({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                })
                
                const responsePostos = await api.get(`./postos?find=${filter}`)

                const {status, data} = responsePostos
                if(status === 200 && data.success === true)
                setPostos(data.content)

                if(!data.success)
                setEmpty(data.message)
            }
        }
        getContent()
    }, [filter])

    function handleRegion(region){
        setCurrentRegion(region)
    }
    function showBoxDetailPosto(){
        setShowDetailMarker(true)
    }

    return(
        <>
        <Header navigation={navigation} title="Postos de Saúde"/>
        {
            !postos.length ?
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
                :
                <View style={Style.controlMap}>
                    <MapView
                        onRegionChangeComplete={handleRegion}
                        initialRegion={currentRegion}
                        style={Style.map}
                    >
                        <Marker
                            key={1}
                            image={icon_marker_my_position}
                            coordinate={{
                                latitude: myPosition.latitude,
                                longitude: myPosition.longitude
                            }}
                        >
                            <Callout>
                                <View style={Style.marker}>
                                    <Text style={Style.textMarker}>Estou aqui!</Text>
                                </View>
                            </Callout>
                        </Marker>

                        {
                            postos.map(posto => (
                                <Marker
                                    key={posto._id}
                                    image={icon_marker_postos}
                                    coordinate={posto.coords}  
                                >
                                    <Callout>
                                        <View style={Style.marker}>
                                            <Text style={Style.textMarker}>{posto.name}</Text>
                                        </View>
                                    </Callout>
                                </Marker>
                            ))
                        }
                    </MapView>
                    <View style={Style.filter}>
                        <TextInput
                            style={Style.inputFilter}
                            onChangeText={(content) => {
                                setValueInput(content)
                            }}
                            value={valueInput}
                            placeholder="Digite o nome de um posto de saúde"
                        />
                        <TouchableOpacity
                            style={Style.btnSubmit}
                            onPress={() => {
                            setFilter(valueInput)
                            Keyboard.dismiss()
                        }}>
                            <Image source={icon_search} style={Style.iconBtnSubmit}/>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )
}

export default Postos