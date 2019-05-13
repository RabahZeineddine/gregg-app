import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Easing
} from 'react-native'

import style from './style'

import RadioForm from 'react-native-simple-radio-button';
import colors from '../../utils/colors';


class CustomRadioButtonGroup extends React.Component {

    state = {
        value: 0,
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

        const { label, radio_buttons } = this.props

        return (
            <Animated.View style={[styles.holder, { marginBottom: 32 }, {
                transform: [{
                    translateX: this.state.animatedValue.interpolate({
                        inputRange: [-1, 1],
                        outputRange: [-10, 10]
                    })
                }]
            }]}>
                {(label && (<Text style={styles.label}>{label}</Text>))}
                <RadioForm
                    radio_props={radio_buttons}
                    onPress={this.handleInputChange}
                    buttonColor={colors.white}
                    labelColor={colors.white}
                    selectedLabelColor={colors.white}
                    selectedButtonColor={colors.white}
                    animation={true}
                    initial={-1}

                />
            </Animated.View>
        )
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

export default CustomRadioButtonGroup