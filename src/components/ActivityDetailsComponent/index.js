import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import style from './style'
import shopPlace from '../../assets/shopPlace.png'

import shopPinPlace from '../../assets/shopPinPlace.png'
import coin from '../../assets/coinBig.png'

class ActivityDetailsComponent extends React.Component {

    render() {
        return (
            <View style={styles.holder}>
                <View style={styles.headerHolder}>
                    <Image
                        style={styles.picture}
                        source={shopPlace}
                        resizeMode="contain"
                    />
                    <Text style={styles.name}>Conveniência do Galego</Text>
                    <Text style={styles.type}>Lanchonete</Text>
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
                        <Text style={styles.locationText}>Rua Dr. Poty Nóbrega, 1267.</Text>
                        <Text style={styles.locationText} >Lagoa Nova - Natal/RN</Text>
                    </View>
                </View>
                <View style={styles.btnsHolder}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Ligar</Text>
                    </TouchableOpacity>
                    <View style={styles.seperator} />
                    <TouchableOpacity style={styles.btn}>
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
                            <Text style={styles.pointsValue}>30</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create(style)


export default ActivityDetailsComponent