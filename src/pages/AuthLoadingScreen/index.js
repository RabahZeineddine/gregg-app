import React from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native'
import style from './style'
import { white } from '../../utils/colors';
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props)
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {

        const { user } = this.props

        // GET LOGGED USER
        const USER = user
        this.props.navigation.navigate(USER.isLogged ? 'App' : 'Auth')


    }

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color={white} />
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

export default connect(
    mapStateToProps
)(AuthLoadingScreen)