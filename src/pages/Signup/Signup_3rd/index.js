import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import style from './style'

import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

class Signup_3rd extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        date: new Date(),
        radio_buttons: [
            { label: 'Masculino', value: 0 },
            { label: 'Feminino', value: 1 }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomInput
                    label="Data de nascimento"
                    icon="md-calendar"
                    iconSource="Ionicons"
                    type="date"
                    onChangeText={this.props.onInputChangeValue('birthday')}
                    validationValue={this.props.inputs.birthday}
                    resetValidation={this.props.resetValidation('birthday')}
                />
                <CustomInput
                    label="Sexo"
                    type="radio-group"
                    radio_buttons={this.state.radio_buttons}
                    onChangeText={this.props.onInputChangeValue('sex')}
                    validationValue={this.props.inputs.sex}
                    resetValidation={this.props.resetValidation('sex')}
                />

                <View style={styles.btnsHolder}>
                    <CustomButton text="Continuar" onPress={this.props.finalStep} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default Signup_3rd