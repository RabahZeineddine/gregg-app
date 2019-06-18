import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

import PropTypes from 'prop-types'

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR')

import Placeholder from '../../../assets/placeholder-orange.png'
import ShopingCart from '../../../assets/shopping-cart-orange.png'
import Rating from '../../../assets/rating-orange.png'



import style from './style'



class ActivityItem extends React.Component {

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
        let icon
        let value
        let valueStyle
        let place
        let productName
        let date
        switch (item.type) {
            case 'checkin':
                icon = Placeholder
                value = `+ ${item.value} Gregoletas`
                valueStyle = 'green'
                place = item.storeVisited.name
                date = item.dateOfVisit
                break;
            case 'rate':
                icon = Rating
                value = `${item.rate} NPS`
                valueStyle = 'gray'
                place = item.storeRate.name
                date = item.date
                break;
            case 'redeem':
                icon = ShopingCart
                value = `- ${item.itemRedeem.price} Gregoletas`
                valueStyle = 'red'
                productName = item.itemRedeem.name
                place = item.itemRedeem.menuFrom.name 
                date = item.dateOfRedeem
                break
            default:
                break;
        }

        const title = productName ? productName : place
        const subtitle = productName ? place : null

        return (
            <TouchableOpacity style={styles.holder} onPress={() => {
                if (item.type == 'checkin') {
                    this.props.navigation.navigate('Activity', {
                        item
                    })
                }
            }}>
                {icon && (
                    <View style={styles.iconHolder}>
                        <Image
                            style={styles.icon}
                            source={icon}
                            resizeMode="contain"
                        />
                    </View>
                )}
                <View style={styles.valueHolder}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && (
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    )}
                    <Text style={[styles.value, styles[valueStyle]]}>{value}</Text>
                </View>
                <View style={styles.dateHolder}>
                    <Text style={styles.date}>{this.getTime(date)}</Text>
                    <Text style={styles.date}>{this.getDate(date)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(style)

export default ActivityItem