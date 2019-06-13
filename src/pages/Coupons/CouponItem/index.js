import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR')
import style from './style'
import PropTypes from 'prop-types'
import CustomModal from '../../../components/CustomModal';


class CouponItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    state = {
        getRedeem: false
    }

    getTime = (timestamp) => {
        let date = new Date(timestamp)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    getDate = (timestamp) => {
        let date = new moment(timestamp)
        return date.format('DD MMM').toUpperCase()
    }

    useRedeem = () => {
        this.setState({ getRedeem: true })
    }

    resetRedeemState = () => {
        this.setState({ getRedeem: false })
    }

    render() {

        const { item } = this.props

        const date = item.dateOfRedeem
        const productName = item.itemRedeem.name
        const value = item.itemRedeem.price


        const disabledStyle = item.alreadyUsed

        return (
            <TouchableOpacity style={styles.holder} onPress={this.useRedeem} >
                {this.state.getRedeem && item.alreadyUsed && (<CustomModal
                    title="Item resgatado"
                    description="Opa, parece que você já efetuou o resgate dessa recompensa"
                    customImageName="Gregg-Aviso"
                    onDismiss={this.resetRedeemState}
                />)}
                {this.state.getRedeem && !item.alreadyUsed && (
                    <CustomModal
                        title="O código para o resgate desta recompensa é:"
                        subtitle={item.couponCode}
                        description="Mostre o código para o atendente e faça o resgate do seu prêmio."
                        customImageName="Gregg-Apontando"
                        onDismiss={this.resetRedeemState}
                        buttons={[
                            {
                                text: 'Resgate efetuado!',
                                onPress: this.resetRedeemState
                            },
                            {
                                text: 'Cancelar',
                                onPress: this.resetRedeemState,
                                type: 'text'
                            }
                        ]}
                    />
                )}
                <View style={styles.valueHolder}>
                    <Text style={[styles.title, disabledStyle ? styles.disabled : {}]}>{productName}</Text>
                    {/* <Text style={[styles.subtitle, disabledStyle ? styles.disabled : {}]}>{place}</Text> */}
                    <Text style={[styles.value, disabledStyle ? styles.disabled : {}]}>{`- ${value} pontos`}</Text>
                </View>
                <View style={styles.dateHolder}>
                    <Text style={[styles.date, disabledStyle ? styles.disabled : {}]}>{this.getTime(date)}</Text>
                    <Text style={[styles.date, disabledStyle ? styles.disabled : {}]}>{this.getDate(date)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create(style)

export default CouponItem