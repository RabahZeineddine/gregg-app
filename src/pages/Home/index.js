import React from 'react'
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native'

import style from './style'
import ProfileComponent from '../../components/ProfileComponent';
import CouponsComponent from '../../components/CouponsComponent';
import ActivitiesComponent from '../../components/ActivitiesComponent';

class Home extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Início'
    }
    render() {
        return (
            <View style={styles.container} >
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <ProfileComponent />
                    <CouponsComponent navigation={this.props.navigation} />
                    <ActivitiesComponent navigation={this.props.navigation} limit={8} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default Home