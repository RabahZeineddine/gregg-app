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

class RewardItem extends React.Component {

    render() {

        const { item } = this.props

        return (
            <TouchableOpacity style={[styles.holder, this.props.score >= item.price ? styles.green : {}]}>
                <Text style={styles.name}>{item.name}</Text>
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