import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import CustomTextInput from '../CustomTextInput'
import CustomPasswordInput from '../CustomPasswordInput'
import CustomDateInput from '../CustomDateInput'
import CustomRadioButtonGroup from '../CustomRadioButtonGroup'

import PropTypes from 'prop-types'

import style from './style'
import colors from '../../utils/colors';


class CustomInput extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        type: PropTypes.string.isRequired,
        onChangeText: PropTypes.func,
        value: PropTypes.string
    }

    state = {
        showPassword: false,
        date: ''
    }

    render() {
        return (
            this.getInput()
        )
    }

    getIcon = (localIcon, localSource) => {
        let { icon, iconSource } = this.props
        icon = icon || localIcon
        iconSource = iconSource || localSource
        switch (iconSource) {
            case 'FontAwesome':
                return < FontAwesome name={icon} style={styles.icon} size={32} color={colors.gray} />
            case "Ionicons":
                return <Ionicons name={icon} style={styles.icon} size={32} color={colors.gray} />
        }
    }

    getInput = () => {
        const { type } = this.props
        switch (type) {
            case "text":
                return <CustomTextInput {...this.props} />
            case "password":
                return <CustomPasswordInput {...this.props} />
            case "date":
                return <CustomDateInput {...this.props} />
            case "radio-group":
                return <CustomRadioButtonGroup {...this.props} />
            default:
                return <View><Text>Inpu type not supported</Text></View>
        }
    }
}

const styles = StyleSheet.create(style)

export default CustomInput