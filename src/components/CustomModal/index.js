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
import ErrorImage from '../../assets/Gregg-Falha.png'

import style from './style'
import CustomButton from '../CustomButton';
import colors from '../../utils/colors';


class CustomModal extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        withoutImage: PropTypes.bool,
        customImageName: PropTypes.string,
        success: PropTypes.bool,
        buttons: PropTypes.array
    }

    state = {
        modalVisible: true
    }

    render() {

        let { buttons } = this.props
        if (!buttons) buttons = []
        if (buttons.length == 0) buttons.push({
            text: 'OK',
            onPress: this.dismissModal
        })

        return (


            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                presentationStyle="overFullScreen"
                onRequestClose={this.dismissModal}
            >
                <View style={styles.container}>
                    <View style={styles.holder}>
                        {!this.props.withoutImage && (
                            <View style={styles.imageHolder}>
                                <Image
                                    style={styles.image}
                                    source={this.props.success ? SuccessImage : ErrorImage}
                                    resizeMode="contain"
                                />
                            </View>
                        )}

                        <Text style={styles.title}>{this.props.title || ''}</Text>
                        <Text style={styles.subtitle}>{this.props.description || ''}</Text>


                        <View style={styles.btnHolder}>
                            {buttons.map((button, index) => <CustomButton key={index} backgroundColor={button.backgroundColor} text={button.text} onPress={button.onPress} />)}
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }

    dismissModal = () => {
        this.setState({ modalVisible: false })
    }
}

const styles = StyleSheet.create(style)

export default CustomModal