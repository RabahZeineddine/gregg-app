import React from 'react'

import {
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import style from './style'
import { Ionicons } from '@expo/vector-icons'

import PropTypes from 'prop-types'
import colors from '../../utils/colors';


class MenuButton extends React.Component {

    static propTypes = {
        onPress: PropTypes.func.isRequired
    }

    render() {


        return (
            <TouchableOpacity style={styles.btn} onPress={this.props.onPress} >
                <Ionicons name="md-menu" color={colors.white} size={40} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style)

export default MenuButton