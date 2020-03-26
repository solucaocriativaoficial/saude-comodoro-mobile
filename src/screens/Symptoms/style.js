import {StyleSheet} from 'react-native'
import StylePattern from '../../components/StylePattern'
const style = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    box_empty:{
        height: 100,
        alignItems: "center",
        justifyContent: 'center'
    },
    empty: {
        color: StylePattern.colors.black_light,
        fontSize: 14,
        fontWeight: "bold"
    },
    post: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center'
    },
    info:{
        fontSize: 16,
        fontWeight: "bold",
        color: StylePattern.colors.secundary
    }
})

export default style