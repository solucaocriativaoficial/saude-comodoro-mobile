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
    boxControlInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    boxInfo:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleinfo:{
        fontSize: 16,
        fontWeight: "bold",
        color: StylePattern.colors.secundary
    },
    info: {
        fontSize: 35,
        fontWeight: "bold",
        color: StylePattern.colors.primary,
        marginVertical: 15,
    },
})

export default style