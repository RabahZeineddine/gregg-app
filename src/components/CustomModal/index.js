import React from 'react'
import {
    View,
    Text,
    Modal,
    StatusBar,
    StyleSheet,
    Image
} from 'react-native'

import PropTypes from 'prop-types'
import SuccessImage from '../../assets/Gregg-Sucesso.png'

import style from './style'
import CustomButton from '../CustomButton';
import colors from '../../utils/colors';


class CustomModal extends React.Component {


    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        withImage: PropTypes.bool,
        success: PropTypes.bool,
        buttons: PropTypes.array.isRequired

    }

    render() {
        return (


            <View style={styles.container}>
                <StatusBar />
                <View style={styles.holder}>
                    {this.props.success && this.props.withImage && (
                        <View style={styles.imageHolder}>
                            <Image
                                style={styles.image}
                                source={SuccessImage}
                                resizeMode="contain"
                            />
                        </View>
                    )}

                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.description}</Text>

                    <View style={styles.btnHolder}>
                        {this.props.buttons.map((button, index) => <CustomButton key={index} backgroundColor={button.backgroundColor} text={button.text} onPress={button.onPress} />)}
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create(style)

export default CustomModal