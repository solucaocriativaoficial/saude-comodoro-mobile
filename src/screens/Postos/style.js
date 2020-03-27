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
        width: 70,
        height: 50,
        justifyContent: 'center',
        backgroundColor: StylePattern.colors.primary
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
        color: StylePattern.colors.black_light
    },
    info:{
        fontSize: 16,
        fontWeight: "bold",
        color: StylePattern.colors.secundary
    },
    controlMap:{
        flex: 1,
    },
    map:{
        flex: 9.5,
    },
    myPosition: {
        padding: 10,
        backgroundColor: StylePattern.colors.secundary
    },
    filter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: 10,
        height: 50,
        paddingHorizontal: 10,
    },
    inputFilter:{
        width: "80%",
        backgroundColor: StylePattern.colors.white,
        marginRight: 10,
        borderWidth: 1,
        borderColor: StylePattern.colors.black_more_light,
        borderRadius: 25,
        paddingHorizontal: 20,
        fontWeight: "bold",
        color: StylePattern.colors.primary,
    },
    btnSubmit:{
        width: 50,
        backgroundColor: StylePattern.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    iconBtnSubmit:{
        width: 30,
        height: 30,
    },
    marker:{
        flex:1,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    textMarker:{
        color: StylePattern.colors.secundary,
        fontWeight: 'bold',
    },
    textMoreInformation:{
        fontSize: 9,
    }
})

export default style