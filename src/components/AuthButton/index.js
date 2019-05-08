import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import PropType from 'prop-types'

import style from './style'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../utils/colors';

class AuthButton extends React.Component {


    static propTypes = {
        type: PropType.string.isRequired
    }

    render() {

        const { type } = this.props
        return (
            <TouchableOpacity style={styles.btnHolder}  >
                <Ionicons name={type == "facebook" ? "logo-facebook" : "logo-google"} size={32} color={colors.white} />
                <Text style={styles.btnText}>Entrar com {type == "facebook" ? "Facebook" : "Google"}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style)

export default AuthButton