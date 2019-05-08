import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import PropType from 'prop-types'

import style from './style'

class CustomButton extends React.Component {


    static propTypes = {
        text: PropType.string.isRequired
    }

    render() {

        const { text, backgroundColor, ...rest } = this.props
        let btnStyle = [styles.btn]
        if (backgroundColor) btnStyle.push({ backgroundColor })
        return (
            <TouchableOpacity style={btnStyle} {...rest} >
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style)

export default CustomButton