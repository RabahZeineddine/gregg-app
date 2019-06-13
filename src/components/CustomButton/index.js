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

        const { text, backgroundColor, type, textStyle, textColor, ...rest } = this.props
        let btnStyle
        let btnText = [styles.btnText]
        if (type == "text") {
            btnStyle = [styles.textTypeBtn]
            if (textColor) {
                btnText.push({ color: textColor })
            }
        } else {
            btnStyle = [styles.btn]
        }
        if (backgroundColor) btnStyle.push({ backgroundColor })

        if (textStyle) btnText.push(textStyle)
        return (
            <TouchableOpacity style={btnStyle} {...rest} >
                <Text style={btnText}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style)

export default CustomButton