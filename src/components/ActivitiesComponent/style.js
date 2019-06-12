import colors from "../../utils/colors";

export default ({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.dark_gray,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 5
    },
    headerBtnText: {
        color: colors.title_gray,
        marginRight: 5,
        fontSize: 12
    },
    title: {
        color: colors.orange,
        fontSize: 16,
        fontFamily: 'Overpass-Bold'
    },
    holder: {
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 10
    },
    container: {
        flex: 1,
    },
    footerBtn: {
        backgroundColor: colors.orange,
        padding: 8,
        borderRadius: 18,
        marginTop: 15,
        marginBottom: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android

    },
    footerBtnText: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Overpass-Light',
        fontSize: 16
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    }
})