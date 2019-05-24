import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'

import style from './style'

import { Ionicons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import colors from '../../utils/colors';
import CouponItem from './CouponItem';
import CustomModal from '../../components/CustomModal';

class Coupons extends React.Component {

    state = {
        isCollapsed: false,
        getRedeem: false,
        itemResgatado: false,
        itemCode: ''
    }

    _keyExtractor = (item, index) => `${index}`

    renderITem = (item) => {
        return (
            <CouponItem item={item.item} getRedeem={() => this.getRedeem(item.item)} />
        )
    }

    toggleCollapse = () => {
        this.setState((previousState) => ({
            isCollapsed: !previousState.isCollapsed
        }))
    }

    getRedeem = (item) => {

        this.setState({
            getRedeem: true, itemResgatado: item.resgatado, itemCode: item.code
        })
    }

    resetRedeemState = () => {
        this.setState({
            getRedeem: false,
            itemResgatado: false,
            itemCode: ''
        })
    }


    render() {

        const data = [
            { type: 'resgate', place: 'Loja da Carlinha', productName: 'Par de Brincos', date: new Date('2019-01-15T15:20:00'), data: { value: 70 }, resgatado: false, code: '123123' },
            { type: 'resgate', place: 'Conveniência do Galego', productName: '1 Trufa', date: new Date('2019-01-13T16:20:00'), data: { value: 30 }, resgatado: false, code: '123123' },
            { type: 'resgate', place: 'Conveniência do Galego', productName: '1 Picolé', date: new Date('2019-01-09T13:21:00'), data: { value: 50 }, resgatado: true, code: '123123' },
            { type: 'resgate', place: 'Conveniência do Galego', productName: '1 Goiabada', date: new Date('2019-01-02T14:43:00'), data: { value: 10 }, resgatado: true, code: '123123' },
            { type: 'resgate', place: 'Loja da Carlinha', productName: '1 Pulseira', date: new Date('2018-12-27T18:32:00'), data: { value: 40 }, resgatado: true, code: '123123' },
            { type: 'resgate', place: 'Conveniência do Galego', productName: '1 Trufa', date: new Date('2018-12-25T12:42:00'), data: { value: 30 }, resgatado: true, code: '123123' },
        ]


        return (
            <View style={styles.container}>
                <View style={styles.holder}>

                    {this.state.getRedeem && this.state.itemResgatado && (
                        <CustomModal
                            title="Item resgatado"
                            description="Opa, parece que você já efetuou o regate dessa recompensa"
                            customImageName="Gregg-Aviso"
                            onDismiss={this.resetRedeemState}
                        />
                    )}
                    {this.state.getRedeem && !this.state.itemResgatado && (
                        <CustomModal
                            title="O código para o resgate desta recompensa é:"
                            subtitle={this.state.itemCode}
                            description="Mostre o código para o atendente e faça o resgate do seu prêmio."
                            customImageName="Gregg-Aviso"
                            onDismiss={this.resetRedeemState}
                            buttons={[
                                {
                                    text: 'Resgate efetuado!',
                                    onPress: this.resetRedeemState
                                }
                            ]}
                        />
                    )}


                    <View style={styles.header}>
                        <Text style={styles.title}>SEUS CUPONS</Text>
                        <TouchableOpacity onPress={this.toggleCollapse} style={styles.headerBtn}>
                            <Text style={styles.headerBtnText}>{this.state.isCollapsed ? 'Ver todos' : 'Esconder'}</Text>
                            <Ionicons name={this.state.isCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} color={colors.orange} />
                        </TouchableOpacity>
                    </View>

                    <Collapsible collapsed={this.state.isCollapsed} >
                        <FlatList
                            style={styles.holder}
                            data={data}
                            renderItem={this.renderITem}
                            keyExtractor={this._keyExtractor}
                            ItemSeparatorComponent={() => (
                                <View style={styles.separator} />
                            )}
                        />
                    </Collapsible>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default Coupons