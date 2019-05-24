import colors from "../../../utils/colors";

export default ({
    holder: {
        flexDirection: 'row',
        padding: 2
    },
    iconHolder:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 50,
        height: 50
    },
    valueHolder: {
        flex: 1
    },
    title: {
        fontSize: 14,
        fontFamily: 'Overpass-Regular',
        color: colors.title_gray
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Overpass-Light',
        color: colors.text_gray
    },
    value: {
        fontSize: 14,
        fontFamily: 'Overpass-Light'
    },
    green: {
        color:colors.green
    },
    gray: {
        color: colors.text_gray
    },
    red: {
        color: colors.red
    },
    date: {
        fontSize: 12,
        fontFamily: 'Overpass-Light',
        color: colors.text_gray
    },
    dateHolder: {
        justifyContent: 'flex-end'
    }

})