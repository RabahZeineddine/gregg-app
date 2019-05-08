import colors from "../../utils/colors";

export default ({
    holder: {
        alignItems: 'flex-start',
        marginTop: 20
    },
    label: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Overpass-Regular'
    },
    inputHolder: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.white,
        borderRadius: 12,
        width: '100%',
        height: 52,
        marginTop: 10
    },
    icon: {
        marginLeft: 10
    },
    rightIcon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        height: '100%',
        justifyContent: 'center'
    },
    dateInput: {
        flex: 1,
        height: '100%',
        borderWidth: 0,
        padding: 0
    },
    error: {
        color: colors.red,
        fontSize: 18,
        fontFamily: 'Overpass-Regular',
        textDecorationLine: 'underline'
    }
})