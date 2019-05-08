import colors from "../../utils/colors";

export default ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        flex: 1,
        paddingTop: '30%',
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: colors.modal_background

    },
    holder: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: 32,
        paddingRight: 64,
        paddingLeft: 64
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
        color: colors.text_gray,
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Overpass-Light'
    },
    btnHolder: {
        alignItems: 'center',
        marginTop: 32
    }
})