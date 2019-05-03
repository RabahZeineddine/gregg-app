import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import PropTypes from 'prop-types'
import style from './style'

import { FontAwesome } from '@expo/vector-icons'
import colors from '../../utils/colors';

class CustomInput extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        onChangeText: PropTypes.func,
        value: PropTypes.string
    }

    render() {
        const { label, setRef, withMask, icon, iconSource, ...rest } = this.props
        return (
            <View style={styles.holder}>
                {(label && (<Text style={styles.label}>{label}</Text>))}
                <View style={styles.inputHolder}>
                    {icon && iconSource == "FontAwesome" && (
                        <FontAwesome name={icon} style={styles.icon} size={32} color={colors.gray} />
                    )}
                    {this.props.withMask ?
                        <TextInputMask
                            style={styles.input}
                            {...rest}
                            ref={setRef || null}
                        />
                        : <TextInput
                            style={styles.input}
                            {...rest}
                            ref={setRef || null}
                        />
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default CustomInput