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
import GreggAviso from '../../assets/Gregg-Aviso.png'
import GreggApontando from '../../assets/Gregg-Apontando.png'
import GreggChorando from '../../assets/Gregg-Chorando.png'

import style from './style'
import CustomButton from '../CustomButton';
import colors from '../../utils/colors';


class CustomModal extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
        withoutImage: PropTypes.bool,
        customImageName: PropTypes.string,
        success: PropTypes.bool,
        buttons: PropTypes.array,
        onDismiss: PropTypes.func
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

        let icon
        if (!this.props.withoutImage) {
            if (this.props.success) icon = SuccessImage
            else if (this.props.customImageName) {
                switch (this.props.customImageName) {
                    case 'Gregg-Aviso':
                        icon = GreggAviso
                        break;
                    case 'Gregg-Apontando':
                        icon = GreggApontando
                        break;
                    case 'Gregg-Chorando':
                        icon = GreggChorando
                        break;
                    default:
                        icon = ErrorImage
                        break
                }
            }
            else {
                icon = ErrorImage
            }
        }

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
                                    source={icon}
                                    resizeMode="contain"
                                />
                            </View>
                        )}

                        <Text style={styles.title}>{this.props.title || ''}</Text>
                        {this.props.subtitle && (
                            <Text style={styles.subtitle}>{this.props.subtitle || ''}</Text>
                        )}
                        <Text style={styles.description}>{this.props.description || ''}</Text>


                        <View style={styles.btnHolder}>
                            {buttons.map((button, index) => <CustomButton key={index} backgroundColor={button.backgroundColor} text={button.text} onPress={button.onPress} type={button.type} textColor={button.type && button.type == 'text' ? colors.orange : null} />)}
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }

    dismissModal = () => {
        this.setState({ modalVisible: false })
        if (this.props.onDismiss) {
            this.props.onDismiss()
        }
    }
}

const styles = StyleSheet.create(style)

export default CustomModal