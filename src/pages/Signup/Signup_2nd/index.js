import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import style from './style'
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

class Signup_2nd extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        currentPage: 0
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomInput
                    label="Nome"
                    icon="md-person"
                    iconSource="Ionicons"
                    type="text"
                    onChangeText={this.props.onInputChangeValue('firstname')}
                    validationValue={this.props.inputs.firstname}
                    resetValidation={this.props.resetValidation('firstname')}
                />
                <CustomInput
                    label="Sobrenome"
                    icon="md-person"
                    iconSource="Ionicons"
                    type="text"
                    onChangeText={this.props.onInputChangeValue('lastname')}
                    validationValue={this.props.inputs.lastname}
                    resetValidation={this.props.resetValidation('lastname')}
                />
                <View style={styles.btnsHolder}>
                    <CustomButton text="Continuar" onPress={this.props.nextStep} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default Signup_2nd