import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing
} from 'react-native'


import PropTypes from 'prop-types'
import style from '../CustomInput/style'

import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import DatePicker from 'react-native-datepicker'
import colors from '../../utils/colors';



class CustomDateInput extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.string
    }

    state = {
        error: false,
        animatedValue: new Animated.Value(0)
    }

    componentDidUpdate() {
        if (!this.props.validationValue.valid) {
            this.handleAnimation()
            this.setState({ error: true })
            this.props.resetValidation()
        }
    }

    render() {
        const { label, icon, iconSource, validationValue } = this.props
        return (
            <Animated.View style={[styles.holder, {
                transform: [{
                    translateX: this.state.animatedValue.interpolate({
                        inputRange: [-1, 1],
                        outputRange: [-10, 10]
                    })
                }]
            }]}>
                {(label && (<Text style={styles.label}>{label}</Text>))}
                <View style={styles.inputHolder}>

                    {icon && iconSource && (
                        this.getIcon()
                    )}

                    <DatePicker
                        style={styles.input}
                        date={!this.state.error ? validationValue.value : ''}
                        mode="date"
                        placeholder={this.state.error ? validationValue.error : ' '}
                        format="DD-MM-YYYY"
                        iconSource={null}
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        onDateChange={this.handleInputChange}
                        showIcon={false}
                        customStyles={{
                            dateInput: styles.dateInput,
                            placeholderText: this.state.error ? { color: colors.red } : null
                        }
                        }
                        placeholder={this.state.error ? validationValue.error : ' '}

                    />

                    <MaterialCommunityIcons name="calendar-check" style={styles.rightIcon} size={32} color={colors.orange} />
                </View>
            </Animated.View>
        )
    }

    getIcon = (localIcon, localSource) => {
        let { icon, iconSource } = this.props
        icon = icon || localIcon
        iconSource = iconSource || localSource
        switch (iconSource) {
            case 'FontAwesome':
                return < FontAwesome name={icon} style={styles.icon} size={32} color={!this.state.error ? colors.gray : colors.red} />
            case "Ionicons":
                return <Ionicons name={icon} style={styles.icon} size={32} color={!this.state.error ? colors.gray : colors.red} />
        }
    }

    resetError = () => {
        this.setState({ error: false })
    }

    handleInputChange = (value) => {
        const { onChangeText } = this.props
        this.setState({ error: false })
        if (onChangeText) onChangeText(value)
    }

    handleAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state.animatedValue, { toValue: 1.0, duration: 25, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.state.animatedValue, { toValue: -1.0, duration: 50, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.state.animatedValue, { toValue: 0.0, duration: 25, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.state.animatedValue, { toValue: 1.0, duration: 25, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.state.animatedValue, { toValue: -1.0, duration: 50, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(this.state.animatedValue, { toValue: 0.0, duration: 25, easing: Easing.linear, useNativeDriver: true })
        ]).start()
    }

}

const styles = StyleSheet.create(style)

export default CustomDateInput