import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native'

// import Logo from '../../../assets/Gregg-Desafio.png'
import LogoGif from '../../../assets/gregg-desafio.gif'



import style from './style'
import StatusBar from '../../../components/StatusBar';
import CustomButton from '../../../components/CustomButton';
import colors from '../../../utils/colors';

class Introduction extends React.Component {

    static navigationOptions = {
        header: null
    }

    nextScreen = () => {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar />
                <View style={styles.header}>
                    <Text style={style.title}>Vamos começar o</Text>
                    <Text style={style.title}>seu cadastro!</Text>
                    <Text style={styles.subtitle}>Para ter acesso as funcionalidades do nosso aplicativo, complete os espaços com seus dados:</Text>
                </View>
                <View style={styles.btnHolder}>
                    <CustomButton text="Começar!" backgroundColor={colors.green} onPress={this.nextScreen} />
                </View>
                <View style={styles.imagesHolder}>
                    <View style={styles.colorView} />
                    <Image
                        style={styles.logo}
                        source={LogoGif}
                        resizeMode="contain"
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create(style)

export default Introduction