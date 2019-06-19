import React from 'react'
import CustomActivityIndicator from '../../components/CustomActivityIndicator';



class Logout extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('LogoutRoot')
        }, 1000)
    }
    render() {
        return (
            <CustomActivityIndicator />
        )
    }
}

export default Logout