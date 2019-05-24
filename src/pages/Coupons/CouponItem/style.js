import colors from "../../../utils/colors";

export default ({
    holder: {
        flexDirection: 'row',
        paddingLeft: 20
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
        fontFamily: 'Overpass-Light',
        color: colors.red
    },
    disabled: {
        color: colors.text_gray
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