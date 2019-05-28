import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import style from './style'
import ActivitiesComponent from '../../components/ActivitiesComponent';
import ActivityDetailsComponent from '../../components/ActivityDetailsComponent';
import CouponsComponent from '../../components/CouponsComponent';

class Activity extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <ActivityDetailsComponent />
                    <CouponsComponent />
                    <ActivitiesComponent navigation={this.props.navigation} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default Activity