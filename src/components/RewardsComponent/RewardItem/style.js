import colors from "../../../utils/colors";

export default ({
    holder: {
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: colors.text_gray,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    green: {
        backgroundColor: colors.green
    },
    iconHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        color: colors.white,
        fontFamily: 'Overpass-Regular',
        fontSize: 14
    },
    icon: {
        width: 20,
        height: 20
    },
    price: {
        fontFamily: 'Overpass-Light',
        fontSize: 16,
        color: colors.white,
        marginLeft: 5
    }
})