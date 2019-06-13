import colors from "../../utils/colors";

export default ({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white_background,
        padding: 20,
    },
    holder: {
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 10,
        flex: 1
    },
    contentContainer: {
        flexGrow: 1,
        backgroundColor: colors.white_background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: colors.orange,
        fontSize: 16,
        fontFamily: 'Overpass-Bold'
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
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    }
})