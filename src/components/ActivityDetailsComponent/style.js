import colors from "../../utils/colors";

export default ({
    holder: {
        width: '100%',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    headerHolder: {
        backgroundColor: colors.orange,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    picture: {
        width: 90,
        height: 90
    },
    name: {
        color: colors.white,
        fontFamily: 'Overpass-SemiBold',
        fontSize: 14,
        marginTop: 10
    },
    type: {
        color: colors.white,
        fontFamily: 'Overpass-Light',
        fontSize: 14
    },
    locationHolder: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    iconHolder: {
        paddingLeft: 5,
        paddingRight: 15
    },
    icon: {
        width: 30,
        height: 30
    },
    locationText: {
        fontSize: 14,
        fontFamily: 'Overpass-Light',
        color: colors.text_light_gray,
        marginTop: 2
    },
    btnsHolder: {
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: colors.title_border_gray,
        borderBottomColor: colors.title_border_gray,
        flexDirection: 'row',
        alignItems: 'center'
    },
    seperator: {
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        height: '80%',
        borderRightColor: colors.title_border_gray,
        borderLeftColor: colors.title_border_gray,
    },
    btn: {
        flex: 1,
        padding: 10,
    },
    btnText: {
        color: colors.orange,
        fontSize: 14,
        fontFamily: 'Overpass-Light',
        textAlign: 'center'
    },
    pointsHolder: {
        backgroundColor: colors.white,
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    pointsContent: {
        backgroundColor: colors.orange,
        borderRadius: 6,
        padding: 10
    },
    pointsTitle: {
        fontSize: 14,
        fontFamily: 'Overpass-Light',
        color: colors.white
    },
    pointsValueHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    coinIcon: {
        width: 60,
        height: 60,
    },
    pointsValue: {
        fontSize: 40,
        fontFamily: 'Overpass-Bold',
        color: colors.white,
        paddingTop: 10,
        marginLeft: 10
    }
})