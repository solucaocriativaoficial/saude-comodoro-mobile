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
        marginVertical: 20,
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
    post_content: {
        color: StylePattern.colors.secundary,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 15,
    },
    boxBtn: {
        height: 50,
        alignItems: 'center',
    },
    btnBack:{
        flex: 1,
        backgroundColor: StylePattern.colors.primary,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textBtn: {
        color: StylePattern.colors.white,
        fontWeight: '700',
    }
})

export default style