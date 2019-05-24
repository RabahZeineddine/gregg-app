import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import Gregg from '../../assets/Gregg.png'

import style from './style'
import ProfileItem from './ProfileItem';



class ProfileComponent extends React.Component {

    render() {
        const { user } = this.props
        console.log(user)
        return (
            <View style={styles.holder}>
                <View style={styles.profileHolder}>
                    <Image
                        style={styles.picture}
                        source={Gregg}
                        resizeMode="contain"
                    />
                    <Text style={styles.name}>{user.profile.name}</Text>
                </View>
                <View style={styles.itemsHolder}>
                    <ProfileItem title="Visitas realizadas" icon="placeholder" value={350} />
                    <ProfileItem title="Resgates realizados" icon="shopping-cart" value={50} />
                    <ProfileItem title="Estabelecimentos visitados" icon="shop" value={15} />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        user
    }
}

export default connect(mapStateToProps)(ProfileComponent)