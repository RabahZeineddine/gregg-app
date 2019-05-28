import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import style from './style'

class PrivacyPolicies extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.containerContent}>

                    <View style={styles.holder}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Políticas de privacidade </Text>
                        </View>

                        <Text style={styles.description}>
                            A PAN TEC LTDA., sociedade limitada com sede na Rua Dr. Poty Nóbrega, 1946 – Sala 702 Lagoa Nova Natal, RN – 59056-180, devidamente registrada perante o Cadastro Nacional da Pessoa Jurídica (“CNPJ/MF”) sob o nº 30.373.362/0001-99 (“Pan Tec ltda”) criou a seguinte Política de Privacidade (“Política de Privacidade”) para providenciar, aos usuários (“Usuários”) e comerciantes (“Comerciantes”, e, em conjunto com Usuários, os “Utilizadores”) do aplicativo “Gregg” (“Aplicativo”), website (www.ogregg.com.br) (“Website”) e dos serviços de relacionamento relacionados ao Website e Aplicativo (“Serviço”), informações sobre o Gregg/Pan Tec ltda, o Website e o Aplicativo. Esta Política de Privacidade estabelece a política da Gregg/Pan Tec ltda com relação a informações, inclusive informações e dados pessoais identificáveis (“Dados Pessoais”), coletados dos Utilizadores do Serviço.
                        </Text>
                        <Text style={styles.description}>Dados Coletados: Quando o Utilizador utiliza o Serviço, o Website e/ou o Aplicativo, a Pan Tec ltda pode coletar Dados Pessoais e outras informações do Utilizador, como descrito a seguir: (I) Dados Pessoais que o Utilizador providencia por meio do Serviço, Website e/ou Aplicativo: A Pan Tec ltda coleta Dados Pessoais do Utilizador quando o Utilizador</Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default PrivacyPolicies