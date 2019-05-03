import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Keyboard,
    Alert,
    ActivityIndicator
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

class CPF extends React.Component {

    constructor(props) {
        super(props)
        this.cpfField = null
    }

    static navigationOptions = {
        header: null
    }

    state = {
        cpf: ''
    }

    handleSubmit = () => {

        Keyboard.dismiss()

        if (this.state.cpf.trim() != '')
            if (this.cpfField.isValid()) {
                const user = {
                    cpf: this.cpfField.getRawValue()
                }
                this.props.verifyRegisteredUser(user)
                    .then(() => {
                        const { user } = this.props
                        if (user.isRegistered) {
                            Alert.alert('Aviso', 'Usuario cadastrado')
                        } else if (!user.error) {
                            this.props.navigation.navigate('Signup')
                        }
                    })

            } else {
                Alert.alert('CPF inválido', 'Favor verifique o CPF informado.')
            }
    }

    handleInputChange = key => (value) => {

        this.setState({ [key]: value })
    }

    render() {

        const { user } = this.props

        if (user.error) Alert.alert('Erro', user.error.detail)

        return (
            <LinearGradient
                colors={[colors.orange, colors.orange, colors.light_orange]}
                style={styles.container}
            >
                <View style={styles.container}>
                    {user.isFetching && (
                        <View style={style.loader}>
                            <ActivityIndicator size="large" color={colors.white} />
                        </View>
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
                                value={this.state.cpf}
                                type={"cpf"}
                                withMask={true}
                                setRef={(ref) => this.cpfField = ref}
                                returnKeyType="done"
                                icon="user"
                                iconSource="FontAwesome"
                            />
                            <View style={styles.btnHolder}>
                                <TouchableOpacity style={styles.btn} onPress={this.handleSubmit} >
                                    <Text style={styles.btnText}>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </KeyboardAwareScrollView>
                </View>
            </LinearGradient>
        )
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