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
        flexDirection: 'row',
        height: 100,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: StylePattern.colors.black_more_light,
        justifyContent: 'center'
    },
    content:{
        flex: 6,
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
    },
    boxControlIconPhone:{
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnIcon:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    iconActions:{
        width: 28,
        height: 28,
        marginTop: 15,
    }
})

export default style