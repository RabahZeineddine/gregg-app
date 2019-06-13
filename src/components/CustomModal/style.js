import colors from "../../utils/colors";

export default ({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.modal_background,
        paddingLeft: 16,
        paddingRight: 16
    },
    holder: {
        backgroundColor: colors.white,
        borderRadius: 16,
        paddingRight: 48,
        paddingLeft: 48,
        paddingTop: 32,
        paddingBottom: 32
    },
    imageHolder: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',

    },
    title: {
        color: colors.orange,
        marginTop: 32,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Overpass-SemiBold'
    },
    subtitle: {
        color: colors.orange,
        marginTop: 16,
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Overpass-SemiBold'
    },
    description: {
        color: colors.text_gray,
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Overpass-Light'
    },
    btnHolder: {
        alignItems: 'center',
        marginTop: 16
    }
})