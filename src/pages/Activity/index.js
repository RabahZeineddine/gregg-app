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
import { connect } from 'react-redux'
import { checkinInfo } from '../../actions/usersActions';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';




class Activity extends React.Component {

    componentDidMount() {

        let item = this.props.navigation.getParam('item')
        let store = item.storeVisited._id

        this.props.getCheckinInfo(store)
    }

    render() {

        let item = this.props.navigation.getParam('item')

        let { checkinInfo } = this.props

        return (
            <View style={styles.container} >
                {checkinInfo && checkinInfo.isFetching && (
                    <CustomActivityIndicator />
                )}

                {checkinInfo && checkinInfo.score && (
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <ActivityDetailsComponent store={checkinInfo} />
                        <CouponsComponent />
                        <ActivitiesComponent navigation={this.props.navigation} limit={8} />
                    </ScrollView>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        checkinInfo: user.checkinInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCheckinInfo: store => dispatch(checkinInfo(store))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
    (Activity)