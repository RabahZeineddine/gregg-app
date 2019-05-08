import colors from "../../../utils/colors";
import { Platform } from 'react-native'

export default ({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        marginTop: Platform.select({
            ios: 64,
            android: 32
        }),
        alignItems: 'center',
        paddingLeft: 32,
        paddingRight: 32
    },
    title: {
        color: colors.orange,
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
        marginTop: 64,
        alignItems: 'center'
    },
    imagesHolder: {
        alignItems: 'center',
        marginTop: 64
    },
    colorView: {
        position: 'absolute',
        backgroundColor: colors.background_purple,
        height: '60%',
        width: '100%'
    },
    logo: {
        marginTop: 48,
        width: '60%',
        height: '60%'
    }
})