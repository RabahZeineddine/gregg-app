import React from 'react'
import {
    View,
    StyleSheet,
    Vibration,
    Text
} from 'react-native'
import style from './style'
import { LinearGradient } from 'expo'
import colors from '../../utils/colors';
import StatusBar from '../../components/StatusBar'
import StepIndicator from 'react-native-step-indicator';
import { ViewPager } from 'rn-viewpager'
import Signup_1st from './Signup_1st'
import Signup_2nd from './Signup_2nd';
import Signup_3rd from './Signup_3rd';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import CustomModal from '../../components/CustomModal';


const customStyles = {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.step_indicator_purple,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.step_indicator_purple,
    stepStrokeUnFinishedColor: colors.white,
    separatorFinishedColor: colors.step_indicator_purple,
    separatorUnFinishedColor: colors.white,
    stepIndicatorFinishedColor: colors.step_indicator_purple,
    stepIndicatorUnFinishedColor: colors.white,
    stepIndicatorCurrentColor: colors.step_indicator_purple,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent'
}


class Signup extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        loading: false,
        showModal: false,
        currentPage: 0,
        email: {
            valid: true,
            value: '',
            page: 0,
            error: ''
        },
        password: {
            valid: true,
            value: '',
            page: 0,
            error: ''
        },
        confirmPassword: {
            valid: true,
            value: '',
            page: 0,
            error: ''
        },
        firstname: {
            valid: true,
            value: '',
            page: 1,
            error: ''
        },
        lastname: {
            valid: true,
            value: '',
            page: 1,
            error: ''
        },
        birthday: {
            valid: true,
            value: '',
            page: 2,
            error: ''
        },
        sex: {
            valid: true,
            value: '',
            page: 2,
            error: ''
        }

    }

    render() {

        return (
            <LinearGradient
                colors={[colors.orange, colors.orange, colors.light_orange]}
                style={styles.container}
            >
                <View style={styles.container}>
                    {(this.state.loading && (
                        <CustomActivityIndicator />
                    ))}

                    {(this.state.showModal && (

                        <CustomModal
                            title="Tudo certo!"
                            description="Eba! Seu cadastro foi efetuado com sucesso, agora vamos para a parte que importa!"
                            buttons={[
                                { text: 'Vamos nessa!', backgroundColor: colors.green, onPress: () => this.setState({ showModal: false }) }
                            ]}
                            success={true} withImage={true} />
                    ))}

                    <StatusBar />
                    <KeyboardAwareScrollView
                        style={styles.container}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={{ flexGrow: 1 }}
                        scrollEnabled={false}
                        enableOnAndroid
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.titleHolder}>
                            <Text style={styles.title}>gregg</Text>
                        </View>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={this.state.currentPage}
                            stepCount={3}
                            onPress={this.onStepPress}
                        />

                        <ViewPager
                            style={styles.viewPager}
                            ref={viewPager => {
                                this.viewPager = viewPager
                            }}
                            initialPage={this.state.currentPage}
                            onPageSelected={({ position }) => this.onStepPress(position)}
                        >

                            <View style={styles.pageContainer}>
                                <Signup_1st
                                    nextStep={this.nextStep}
                                    onInputChangeValue={this.handleInputChange}
                                    resetValidation={this.resetInputValidation}
                                    inputs={
                                        {
                                            email: this.state.email,
                                            password: this.state.password,
                                            confirmPassword: this.state.confirmPassword
                                        }
                                    }
                                />
                            </View>
                            <View style={styles.pageContainer}>
                                <Signup_2nd
                                    nextStep={this.nextStep}
                                    onInputChangeValue={this.handleInputChange}
                                    resetValidation={this.resetInputValidation}
                                    inputs={{
                                        firstname: this.state.firstname,
                                        lastname: this.state.lastname
                                    }}
                                />
                            </View>
                            <View style={styles.pageContainer}>
                                <Signup_3rd
                                    onInputChangeValue={this.handleInputChange}
                                    resetValidation={this.resetInputValidation}
                                    inputs={{
                                        birthday: this.state.birthday,
                                        sex: this.state.sex
                                    }}
                                    finalStep={this.finalStep}
                                />
                            </View>

                        </ViewPager>
                    </KeyboardAwareScrollView>
                </View>
            </LinearGradient>
        )
    }

    handleInputChange = key => (value) => {
        this.setState((previousState) => ({
            [key]: {
                ...previousState[key],
                value
            }
        }))
    }

    nextStep = () => {
        if (this.validateInputsOnPage()) {
            this.onStepPress(this.state.currentPage < 2 ? this.state.currentPage + 1 : 2)
        }
    }

    onStepPress = position => {

        const { currentPage } = this.state
        if (position > currentPage) {
            if (this.validateInputsOnPage()) {
                this.setState({ currentPage: position })
                this.viewPager.setPage(position)
            } else {
                this.viewPager.setPage(currentPage)
            }
        } else {
            this.setState({ currentPage: position })
            this.viewPager.setPage(position)
        }

    }

    resetInputValidation = (key) => () => {
        this.setState((previousState) => ({ [key]: { ...previousState[key], valid: true } }))
    }

    validateInputsOnPage = (setError = true) => {
        let valid = true
        // Validate first page
        if (this.state.currentPage == 0) {
            valid = this.validateFirstScreen(setError)
        }
        if (this.state.currentPage == 1) {
            valid = this.validateSecondScreen(setError)
        }

        if (this.state.currentPage == 2) {
            valid = this.validateThirdScreen(setError)
        }

        if (!valid && setError) setTimeout(() => {
            Vibration.vibrate(200)
        })

        return valid
    }

    validateFirstScreen = (setError = true) => {
        let valid = true
        const { email, password, confirmPassword } = this.state
        if (!this.validateEmail(email.value)) {
            if (setError)
                this.setState((previousState) => ({
                    email: {
                        ...previousState['email'],
                        valid: false,
                        error: 'Email inválido'
                    }
                }))
            valid = false
        }

        if (password.value.trim() == '') {
            if (setError)
                this.setState((previousState) => ({
                    password: {
                        ...previousState['password'],
                        valid: false,
                        error: 'Preenche o campo'
                    }
                }))
            valid = false
        }

        if (confirmPassword.value.trim() == '') {
            if (setError)
                this.setState((previousState) => ({
                    confirmPassword: {
                        ...previousState['confirmPassword'],
                        valid: false,
                        error: 'Preenche o campo'
                    }
                }))
            valid = false
        }

        if (password.value.trim() != '' && confirmPassword.value.trim() != '' && password.value != confirmPassword.value) {
            if (setError)
                this.setState((previousState) => ({
                    password: { ...previousState['password'], valid: false, error: 'As senhas não coincidem' },
                    confirmPassword: { ...previousState['confirmPassword'], valid: false, error: 'As senhas não coincidem' }
                }))
            valid = false
        }

        return valid
    }

    validateSecondScreen = (setError = true) => {
        let valid = true
        let { firstname, lastname } = this.state

        if (firstname.value.trim() == '') {
            if (setError)
                this.setState((previousState) => ({
                    firstname: {
                        ...previousState['firstname'],
                        valid: false,
                        error: 'Preenche o campo'
                    }
                }))
            valid = false
        }

        if (lastname.value.trim() == '') {
            if (setError)
                this.setState((previousState) => ({
                    lastname: {
                        ...previousState['lastname'],
                        valid: false,
                        error: 'Preenche o campo'
                    }
                }))
            valid = false
        }

        return valid

    }

    validateThirdScreen = (setError) => {
        let valid = true
        let { birthday, sex } = this.state
        if (birthday.value.trim() == '' || !birthday.value) {
            if (setError)
                this.setState((previousState) => ({
                    birthday: {
                        ...previousState['birthday'],
                        valid: false,
                        error: 'Preenche o campo'
                    }
                }))
            valid = false
        }
        if (sex.value == '') {
            if (setError)
                this.setState((previousState) => ({
                    sex: {
                        ...previousState['sex'],
                        valid: false
                    }
                }))
            valid = false
        }
        return valid
    }


    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    finalStep = () => {

        let valid = this.validateInputsOnPage()

        if (valid) {
            if (!this.validateFirstScreen(false)) {
                this.onStepPress(0)
                this.validateFirstScreen()
                valid = false
            } else if (!this.validateSecondScreen(false)) {
                this.onStepPress(1)
                this.validateFirstScreen()
                valid = false
            }
        }

        if (valid) {
            this.registerUser()
        }
    }

    registerUser = () => {
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                loading: false,
                showModal: true
            })
        }, 1000)
    }
}

const styles = StyleSheet.create(style)

export default Signup