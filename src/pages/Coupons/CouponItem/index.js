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

    getTime = (timestamp) => {
        let date = new Date(timestamp)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    getDate = (timestamp) => {
        let date = new moment(timestamp)
        return date.format('DD MMM').toUpperCase()
    }

    render() {

        const { item } = this.props
        const { place, productName, data, date, resgatado } = item

        const disabledStyle = resgatado

        return (
            <TouchableOpacity style={styles.holder} onPress={this.props.getRedeem} >
                <View style={styles.valueHolder}>
                    <Text style={[styles.title, disabledStyle ? styles.disabled : {}]}>{productName}</Text>
                    <Text style={[styles.subtitle, disabledStyle ? styles.disabled : {}]}>{place}</Text>
                    <Text style={[styles.value, disabledStyle ? styles.disabled : {}]}>{`- ${data.value} pontos`}</Text>
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