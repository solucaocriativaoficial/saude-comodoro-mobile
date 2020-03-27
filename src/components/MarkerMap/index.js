import React from 'react'
import {View, Text} from 'react-native'
export default function MarkerMap(props){
    return(
        <Marker
            key={props._id}
            coordinate={{
                latitude: props.coords.latitude,
                longitude: props.coords.longitude
            }}
        >
            <View style={{
                backgroundColor: "red"
            }}>
                <Text>Estou aqui</Text>
            </View>
        </Marker>
    )
}