import {StyleSheet} from 'react-native'
import StylePattern from '../StylePattern'
const Style = StyleSheet.create({
    image_background: {
        width: '100%',
        height: 240,
    },
    btnMenu: {
        margin: 10,
        flex: 1,
    },
    imgMenu: {
        width: 40,
        height: 30,
    },
    boxTitle:{
        flex: 7,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingLeft: 5,
    },
    textTitle:{
        color: StylePattern.colors.white,
        fontSize: 25,
        fontWeight: 'bold',
    }
})

export default Style