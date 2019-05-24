import colors from "../../../utils/colors";

export default ({
    holder: {
        flexDirection: 'row',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.title_border_gray,
        alignItems: 'center'
    },
    lastItem: {
        borderBottomWidth: 0,
        paddingBottom: 0
    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        flex: 1,
        color: colors.title_gray,
        fontSize: 14,
        fontFamily: 'Overpass-Regular',
        padding: 0,
        paddingLeft: 10,
        marginTop: 8
    },
    value: {
        fontSize: 16,
        fontFamily: 'Overpass-SemiBold',
        color: colors.orange,
        marginTop: 8
    }
})