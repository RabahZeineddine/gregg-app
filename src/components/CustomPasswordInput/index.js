import React from 'react'
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing
} from 'react-native'

import style from '../CustomInput/style'

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import colors from '../../utils/colors';


class CustomPasswordInput extends React.Component {

    state = {
        showPassword: false,
        animatedValue: new Animated.Value(0),
        error: false
    }

    componentDidUpdate() {
        if (!this.props.validationValue.valid) {
            this.handleAnimation()
            this.setState({ error: true })
            this.props.resetValidation()
        }
    }

    render() {
        const { label, setRef, validationValue, returnKeyType, onSubmitEditing } = this.props
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

                    {this.getIcon('md-lock', 'Ionicons')}

                    <TextInput
                        style={this.state.error ? [styles.input, styles.error] : styles.input}
                        ref={setRef || null}
                        onChangeText={this.handleInputChange}
                        value={!this.state.error ? validationValue.value : ''}
                        returnKeyType={returnKeyType || null}
                        placeholder={this.state.error ? this.props.validationValue.error : ''}
                        placeholderTextColor={this.state.error ? colors.red : null}
                        onFocus={this.resetError}
                        secureTextEntry={!this.state.showPassword}
                        onSubmitEditing={onSubmitEditing || null}
                    />

                    <TouchableOpacity onPress={() => this.setState((previousState) => ({ showPassword: !previousState.showPassword, error: false }))}>
                        <Ionicons name={this.state.showPassword ? 'md-eye' : 'md-eye-off'} style={styles.rightIcon} size={32} color={colors.orange} />
                    </TouchableOpacity>
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

export default CustomPasswordInput