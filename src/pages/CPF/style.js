import colors from "../../utils/colors";

export default ({
    container: {
        flex: 1
    },
    logoHolder: {
        paddingTop: 50,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150
    },
    formContainer: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 48,
        marginTop: 64,
    },
    btnHolder: {
        paddingTop: 46,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        padding: 15,
        paddingLeft: 64,
        paddingRight: 64,
        backgroundColor: colors.dark_gray,
        borderRadius: 18
    },
    btnText: {
        color: colors.white,
        fontSize: 18
    }
})