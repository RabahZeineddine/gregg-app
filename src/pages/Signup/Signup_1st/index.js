import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import style from './style'
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import AuthButton from '../../../components/AuthButton';

class Signup_1st extends React.Component {

    static navigationOptions = {
        header: null
    }



    render() {
        return (
            <View style={styles.container}>
                <CustomInput
                    label="E-mail"
                    icon="md-person"
                    iconSource="Ionicons"
                    type="text"
                    onChangeText={this.props.onInputChangeValue('email')}
                    validationValue={this.props.inputs.email}
                    resetValidation={this.props.resetValidation('email')}
                />
                <CustomInput
                    label="Senha"
                    type="password"
                    onChangeText={this.props.onInputChangeValue('password')}
                    validationValue={this.props.inputs.password}
                    resetValidation={this.props.resetValidation('password')}
                />
                <CustomInput
                    label="Confirmação de senha"
                    type="password"
                    onChangeText={this.props.onInputChangeValue('confirmPassword')}
                    validationValue={this.props.inputs.confirmPassword}
                    resetValidation={this.props.resetValidation('confirmPassword')}
                />
                <View style={styles.btnsHolder}>
                    <CustomButton text="Continuar" onPress={this.props.nextStep} />
                    <AuthButton type="facebook" />
                    <AuthButton type="google" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default Signup_1st