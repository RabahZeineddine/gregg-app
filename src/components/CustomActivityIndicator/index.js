import React from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

import style from './style'
import PropTypes from 'prop-types'
import colors from '../../utils/colors';

class CustomActivityIndicator extends React.Component {


    static porpTypes = {
        size: PropTypes.string.isRequired,
        color: PropTypes.string
    }

    render() {

        const { size, color } = this.props

        return (
            <View style={styles.loader}>
                <ActivityIndicator size={size || "large"} color={color || colors.white} />
            </View>)
    }

}

const styles = StyleSheet.create(style)


export default CustomActivityIndicator