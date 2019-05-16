import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Keyboard,
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
import { login } from '../../actions/usersActions';
import CustomButton from '../../components/CustomButton';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import CustomModal from '../../components/CustomModal';
import AuthButton from '../../components/AuthButton';


class Login extends React.Component {

    constructor(props) {
        super(props)
        this.cpfField = null
    }

    static navigationOptions = {
        header: null
    }

    state = {
        password: {
            value: '',
            valid: true,
            error: ''
        }
    }

    handleSubmit = () => {

        Keyboard.dismiss()

        const { password } = this.state

        if (password.value.trim() != '') {
            const { user } = this.props
            const data = {
                cpf: user.profile.cpf,
                password: password.value
            }
            this.props.login(data)
                .then(() => {
                    const { user } = this.props
                    if(user.isLogged){
                        this.props.navigation.navigate('App')
                    }
                })

        } else {
            this.setState((previousState) => ({
                password: {
                    ...previousState['password'],
                    error: 'Preenche o campo',
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
                                label="Senha"
                                onChangeText={this.handleInputChange('password')}
                                onSubmitEditing={this.handleSubmit}
                                validationValue={this.state.password}
                                type={"password"}
                                returnKeyType="done"
                                resetValidation={this.resetInputValidation('password')}
                            />
                            <View style={styles.btnHolder}>
                                <CustomButton text="Entrar" onPress={this.handleSubmit} />
                            </View>
                            <View style={styles.textBtnHolder}>
                                <CustomButton text="Esqueci minha senha" type="text" />
                            </View>
                            <View style={styles.authBtnsHolder}>
                                <AuthButton type="facebook" />
                                <AuthButton type="google" />
                            </View>
                            <View style={styles.textBtnHolder}>
                                <CustomButton text="Voltar" onPress={this.goBack} type="text" textStyle={{ textDecorationLine: 'underline' }} />
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

    goBack = () => {
        this.props.navigation.goBack()
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
        login: (user) => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)