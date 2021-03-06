import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
    Platform
} from 'react-native'

import style from './style'
import shopPlace from '../../assets/shopPlace.png'

import shopPinPlace from '../../assets/shopPinPlace.png'
import coin from '../../assets/coinBig.png'


class ActivityDetailsComponent extends React.Component {

    callStore = () => {
        const { store } = this.props

        const phoneNumber = store.pointStore.phone

        Linking.canOpenURL(`tel:${phoneNumber}`)
            .then((result) => {
                if (result) {
                    Linking.openURL(`tel:${phoneNumber}`)
                }
            })
            .catch((err) => {
                Alert.alert('Erro', 'Um erro ocorreu.')
            })
    }

    openMap = () => {
        const { store } = this.props

        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = store.pointStore.address
        const url = Platform.select({
            ios: `${scheme}$@${latLng}`,
            android: `${scheme}${latLng}`
        });
        Linking.openURL(url);
    }

    render() {

        const { store } = this.props

        let category = ''
        if (store && store.pointStore && store.pointStore.category && store.pointStore.category.description)
            category = store.pointStore.category.description

        return (
            <View style={styles.holder}>
                <View style={styles.headerHolder}>
                    <Image
                        style={styles.picture}
                        source={shopPlace}
                        resizeMode="contain"
                    />
                    <Text style={styles.name}>{store.pointStore.name}</Text>
                    <Text style={styles.type}>{category}</Text>
                </View>
                <View style={styles.locationHolder}>
                    <View style={styles.iconHolder}>
                        <Image
                            style={styles.icon}
                            source={shopPinPlace}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.locationDataHolder}>
                        <Text style={styles.locationText}>{store.pointStore.address}</Text>
                    </View>
                </View>
                <View style={styles.btnsHolder}>
                    <TouchableOpacity style={styles.btn} onPress={this.callStore}>
                        <Text style={styles.btnText}>Ligar</Text>
                    </TouchableOpacity>
                    <View style={styles.seperator} />
                    <TouchableOpacity style={styles.btn} onPress={this.openMap}>
                        <Text style={styles.btnText}>Como chegar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pointsHolder}>
                    <View style={styles.pointsContent}>
                        <Text style={styles.pointsTitle}>seu saldo de pontos</Text>
                        <View style={styles.pointsValueHolder}>
                            <Image
                                style={styles.coinIcon}
                                source={coin}
                                resizeMode="contain"
                            />
                            <Text style={styles.pointsValue}>{store.score}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create(style)


export default ActivityDetailsComponent