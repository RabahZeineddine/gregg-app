import colors from "../../utils/colors";

export default ({
    holder: {
        width: '100%',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    profileHolder: {
        backgroundColor: colors.orange,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15

    },
    name: {
        color: colors.white,
        fontFamily: 'Overpass-SemiBold',
        fontSize: 14,
        marginTop: 10
    },
    itemsHolder: {
        padding: 10,
        paddingTop: 0,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    }
})