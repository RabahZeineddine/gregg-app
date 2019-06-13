import React from 'react'

import {
    View, Text,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'


import style from './style'
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import { logout } from '../../actions/usersActions';

class Logout extends React.Component {

    constructor(props) {
        super(props)
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {

        // this.props.logout()
        // this.props.navigation.navigate('Auth')


    }

    render() {
        return (
            <View>
                <Text>Logout...</Text>
            </View>
            // <CustomActivityIndicator />

        )
    }
}

const styles = StyleSheet.create(style)

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)