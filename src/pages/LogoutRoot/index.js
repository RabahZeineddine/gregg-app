import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/usersActions';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';

class LogoutRoot extends React.Component {

    componentDidMount() {
        this.props.logout()
        this.props.navigation.navigate('CPF')
    }
    render() {
        return (
            <CustomActivityIndicator />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LogoutRoot)