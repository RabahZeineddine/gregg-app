import {
    Platform
} from 'react-native'

export default ({
    container: {
        flex: 1
    },
    logoHolder: {
        paddingTop: '10%',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150
    },
    formContainer: {
        width: '100%',
        paddingLeft: '4%',
        paddingRight: '4%',
        marginTop: Platform.select({
            ios: '9.6%',
            android: '5%'
        })
    },
    btnHolder: {
        paddingTop: '9.2%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})