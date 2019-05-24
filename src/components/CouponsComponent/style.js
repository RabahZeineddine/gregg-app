import colors from "../../utils/colors";

export default ({
    holder: {
        backgroundColor: colors.white,
        borderRadius: 6,
        marginVertical: 20,
        padding: 10
    },
    title: {
        color: colors.orange,
        fontSize: 16,
        fontFamily: 'Overpass-Bold'
    },
    description: {
        color: colors.text_gray,
        fontSize: 14,
        fontFamily: 'Overpass-Regular'
    },
    descriptionBold: {
        color: colors.text_gray,
        fontSize: 14,
        fontFamily: 'Overpass-SemiBold'
    },
    btn: {
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
    btnText: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Overpass-Light',
        fontSize: 16
    }
})