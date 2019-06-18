import React from 'react'

import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native'

import Coin from '../../../assets/coin.png'

import style from './style'
import CustomModal from '../../CustomModal';

class RewardItem extends React.Component {

    state = {
        getRedeem: false
    }

    useRedeem = () => {
        this.setState({ getRedeem: true })
    }

    resetRedeemState = () => {
        this.setState({ getRedeem: false })
    }

    render() {

        const { item } = this.props

        return (
            <TouchableOpacity style={[styles.holder, this.props.score >= item.price ? styles.green : {}]} onPress={this.useRedeem}>

                {this.state.getRedeem && this.props.score < item.price && (<CustomModal
                    title="Saldo insuficiente"
                    description="Visite-nos mais vezes para acumular pontos e trocar por esta recompensa!"
                    customImageName="Gregg-Chorando"
                    onDismiss={this.resetRedeemState}
                />)}
                {/* {this.state.getRedeem && !item.alreadyUsed && (
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
                )} */}


                <Text style={styles.name} numberOfLines={1}>1 {item.name}</Text>
                <View style={styles.iconHolder}>
                    <Image
                        style={styles.icon}
                        source={Coin}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>{item.price}</Text>

                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style)

export default RewardItem