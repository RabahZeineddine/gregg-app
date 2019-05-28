import colors from "../../utils/colors";

export default ({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white_background,
        padding: 20,
    },
    containerContent: {
        flexGrow: 1,
        backgroundColor: colors.white_background,
    },
    holder: {
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 10,
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
    description: {
        color: colors.text_gray,
        fontSize: 14,
        fontFamily: 'Overpass-Light'
    },
})