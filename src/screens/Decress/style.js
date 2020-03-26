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
        borderBottomWidth: 1,
        borderColor: StylePattern.colors.black_more_light,
        justifyContent: 'center'
    },
    post_title:{
        color: StylePattern.colors.primary,
        fontWeight:'bold',
        marginBottom: 10,
        fontSize: 16,
    },
    barTitle:{
        backgroundColor: StylePattern.colors.primary,
        height: 3,
        width: 50,
        marginBottom: 15,
    },
    boxInfo:{
        marginVertical: 10,
    },
    titleInfo:{
        fontSize: 12,
        fontWeight: "bold",
        color: StylePattern.colors.primary
    },
    titleDescribe: {
        fontSize: 12,
        fontWeight: "bold",
        color: StylePattern.colors.black_light
    },
    info:{
        fontSize: 16,
        fontWeight: "bold",
        color: StylePattern.colors.secundary
    },
    boxBtnShow:{
        alignItems: 'flex-end',
        height: 40,
        marginVertical: 15,
    },
    btnShow: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        backgroundColor: StylePattern.colors.primary,
        borderRadius: 5,
    },
    textBtnShow: {
        color: StylePattern.colors.white,
        fontWeight: "bold",
        fontSize: 14,
    }
})

export default style