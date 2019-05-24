import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import style from './style'

class CouponsComponent extends React.Component {

    render() {
        return (
            <View style={styles.holder}>
                <Text style={styles.title}>CUPONS DE RESGATE</Text>
                <Text style={style.description}>Aqui você encontra todos os códigos dos cupons gerados para realizar um resgate.<Text style={styles.descriptionBold} > Disponível ou indisponível, ele estará aqui.</Text></Text>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Coupons')} >
                    <Text style={styles.btnText}>Ver cupons</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default CouponsComponent