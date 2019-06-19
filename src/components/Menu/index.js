import React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import style from './style'
import StatusBar from '../StatusBar';
import colors from '../../utils/colors';
import Gregg from '../../assets/Gregg.png'
import { DrawerItems } from 'react-navigation'
import { connect } from 'react-redux'
import Helper from '../../utils/helper';

function Menu(props) {
    const { user } = props
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.orange} />
            <View style={styles.container}>
                <View style={styles.profile}>
                    <View style={style.pictureHolder}>
                        <Image
                            style={styles.picture}
                            source={Gregg}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.dataHolder}>
                        {user && user.profile && user.profile.name && (
                            <Text style={styles.name}>{user.profile.name}</Text>
                        )}
                        {user && user.profile && user.profile.cpf && (
                            <Text style={styles.cpf}>{Helper.formatCPF(user.profile.cpf)}</Text>
                        )}
                    </View>
                </View>
                <ScrollView scrollsToTop={false} style={styles.container}>
                    <DrawerItems  {...props} itemStyle={styles.itemStyle} labelStyle={styles.labelStyle} inactiveTintColor={colors.menu_item_color} />
                </ScrollView>


            </View>
        </View>
    )
}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(Menu)