import colors from "../../utils/colors";

export default ({
    holder: {
        alignItems: 'flex-start'
    },
    label: {
        color: colors.white,
        fontSize: 18
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
    input: {
        flex: 1,
        paddingLeft: 10,
        height: '100%'
    }
})