import {StyleSheet} from 'react-native'
import StylePattern from '../../components/StylePattern'
const style = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    post: {
        flex: 1,
        height: 100,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: StylePattern.colors.black_more_light,
        justifyContent: 'center'
    },
    post_title:{
        color: StylePattern.colors.primary,
        fontWeight:'bold',
        marginBottom: 10,
        fontSize: 18,
    },
    post_content: {
        color: StylePattern.colors.secundary,
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default style