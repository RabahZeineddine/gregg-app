import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import style from './style'

class TermsOfUse extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.containerContent}>

                    <View style={styles.holder}>
                        <View style={styles.header}>
                            <Text style={styles.title}>Termos de uso</Text>
                        </View>

                        <Text style={styles.description}>
                            Pelo presente Termo de Uso de Usuário, a PAN TEC LTDA, sociedade limitada com sede na Rua Dr. Poty Nóbrega, 1946 – Sala 702 Lagoa Nova Natal, RN – 59056-180, devidamente registrada perante o Cadastro Nacional da Pessoa Jurídica (“CNPJ/MF”) sob o nº 30.373.362/0001-99 (“Pan Tec ltda”), estabelece os termos e condições que regerão a relação entre a Pan Tec ltda e o(s) usuário(s) (“Usuários”) do seu aplicativo “Gregg” (“Aplicativo”), website www.ogregg.com.br (“Website”) e serviços relacionados. A Pan Tec ltda terá o direito, a qualquer momento e a seu exclusivo critério, de modificar, alterar, adicionar ou remover qualquer diretriz ou cláusula contida neste Termo de Uso ou em qualquer documento a ele relacionado, sem que seja necessária qualquer forma de aviso prévio aos Usuários. Os Usuários devem acessar o Termo de Uso no Website (disponível em: www.ogregg.com.br/termos-do-uso) com frequência, para se cientificarem de eventuais alterações ou modificações ao referido Termo de Uso, ao qual estão obrigados. O uso do Website, Aplicativo ou serviços por parte do Usuário após quaisquer alterações nos Termos de Uso consiste em uma aceitação tácita da nova versão do Termo de Uso...
                    </Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default TermsOfUse