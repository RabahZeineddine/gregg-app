import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Keyboard,
    Alert,
    Vibration
} from 'react-native'
import style from './style'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { LinearGradient } from 'expo'
import Logo from '../../assets/Logo.png'
import CustomInput from '../../components/CustomInput'
import colors from '../../utils/colors';
import StatusBar from '../../components/StatusBar'
import { connect } from 'react-redux'
import { verifyRegisteredUser } from '../../actions/usersActions';
import CustomButton from '../../components/CustomButton';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import CustomModal from '../../components/CustomModal';

class CPF extends React.Component {

    constructor(props) {
        super(props)
        this.cpfField = null
    }

    static navigationOptions = {
        header: null
    }

    state = {
        cpf: {
            value: '',
            valid: true,
            error: ''
        }
    }

    handleSubmit = () => {

        Keyboard.dismiss()

        if (this.cpfField.isValid()) {
            const user = {
                cpf: this.cpfField.getRawValue()
            }
            // this.props.verifyRegisteredUser(user)
                // .then(() => {
                    // const { user } = this.props
                    // if (user.isRegistered) {
                        // Alert.alert('Aviso', 'Usuario cadastrado')
                    // } else if (!user.error) {
                        this.props.navigation.navigate('SignupIntroduction')
                    // }
                // })

        } else {
            this.setState((previousState) => ({
                cpf: {
                    ...previousState['cpf'],
                    error: 'CPF inválido',
                    valid: false
                }
            }))

            setTimeout(() => {
                Vibration.vibrate(200)
            })
        }
    }

    handleInputChange = key => (value) => {

        this.setState((previousState) => ({
            [key]: { ...previousState[key], value }
        }))
    }

    render() {

        const { user } = this.props

        return (
            <LinearGradient
                colors={[colors.orange, colors.orange, colors.light_orange]}
                style={styles.container}
            >
                <View style={styles.container}>
                    {user.isFetching && (
                        <CustomActivityIndicator size="large" />
                    )}
                    {user.error && (
                        <CustomModal title="Erro!" description={user.error.detail} />
                    )}
                    <StatusBar />
                    <KeyboardAwareScrollView
                        style={styles.container}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={{ flexGrow: 1 }}
                        scrollEnabled={false}
                        enableOnAndroid
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.logoHolder}>
                            <Image
                                source={Logo}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>

                        <View style={styles.formContainer}>
                            <CustomInput
                                label="CPF"
                                onChangeText={this.handleInputChange('cpf')}
                                onSubmitEditing={this.handleSubmit}
                                validationValue={this.state.cpf}
                                type={"text"}
                                mask={"cpf"}
                                setRef={(ref) => this.cpfField = ref}
                                returnKeyType="done"
                                icon="md-person"
                                iconSource="Ionicons"
                                resetValidation={this.resetInputValidation('cpf')}
                            />
                            <View style={styles.btnHolder}>
                                <CustomButton text="Entrar" onPress={this.handleSubmit} />
                            </View>
                        </View>

                    </KeyboardAwareScrollView>
                </View>
            </LinearGradient>
        )
    }

    resetInputValidation = (key) => () => {
        this.setState((previousState) => ({ [key]: { ...previousState[key], valid: true } }))
    }
}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyRegisteredUser: (user) => dispatch(verifyRegisteredUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CPF)