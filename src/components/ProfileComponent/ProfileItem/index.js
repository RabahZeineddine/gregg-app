import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import style from './style'

import PropTypes from 'prop-types'
import placeholder from '../../../assets/placeholder.png'
import shop from '../../../assets/shop.png'
import shoppingCart from '../../../assets/shopping-cart.png'

class ProfileItem extends React.Component {


    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }

    render() {

        let icon
        if (this.props.icon == 'placeholder') icon = placeholder
        else if (this.props.icon == 'shop') icon = shop
        else if (this.props.icon == 'shopping-cart') icon = shoppingCart

        return (
            <View style={[styles.holder, this.props.icon == 'shop' ? styles.lastItem : {}]}>
                {icon && (
                    <Image
                        style={styles.icon}
                        source={icon}
                        resizeMode="contain"
                    />
                )}
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.value}>{this.props.value}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create(style)

export default ProfileItem