import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native'
import Collapsible from 'react-native-collapsible'
import style from './style'

import { Ionicons } from '@expo/vector-icons'
import colors from '../../utils/colors';
import ActivityItem from './ActivityItem';

class ActivitiesComponent extends React.Component {

    state = {
        isCollapsed: false
    }

    _keyExtractor = (item, index) => `${index}`

    renderITem = (item) => {
        return (
            <ActivityItem item={item.item} />
        )
    }

    toggleCollapse = () => {
        this.setState((previousState) => ({
            isCollapsed: !previousState.isCollapsed
        }))
    }

    ActivitiesFooter = () => (
        <TouchableOpacity style={styles.footerBtn} onPress={() => this.props.navigation.navigate('Activities')}>
            <Text style={styles.footerBtnText}>Ver mais</Text>
        </TouchableOpacity>
    )

    render() {

        const data = [
            { type: 'checkin', place: 'Conveniência do Galego', date: new Date('2019-02-03T14:37:00'), data: { value: 10 } },
            { type: 'checkin', place: 'Loja da Márcia', date: new Date('2019-01-23T18:32:00'), data: { value: 10 } },
            { type: 'resgate', place: 'Loja da Carlinha', productName: 'Par de Brincos', date: new Date('2019-01-15T15:20:00'), data: { value: 70 } },
            { type: 'checkin', place: 'Loja da Carlinha', date: new Date('2019-01-15T15:20:00'), data: { value: 10 } },
            { type: 'avaliacao', place: 'Barbearia do Seu João', date: new Date('2019-01-10T10:18:00'), data: { value: 6 } },
            { type: 'resgate', place: 'Barbearia do Seu João', productName: '1 Cerveja', date: new Date('2019-01-10T10:14:00'), data: { value: 30 } },
            { type: 'checkin', place: 'Barbearia do Seu João', date: new Date('2019-01-10T10:13:00'), data: { value: 10 } },
            { type: 'avaliacao', place: 'Doceria da Elisângela', date: new Date('2019-01-07T10:18:00'), data: { value: 10 } }
        ]

        return (
            <View style={styles.holder}>
                <View style={styles.header}>
                    <Text style={styles.title}>ATIVIDADES RECENTES</Text>
                    <TouchableOpacity onPress={this.toggleCollapse} style={styles.headerBtn}>
                        <Text style={styles.headerBtnText}>{this.state.isCollapsed ? 'Ver todos' : 'Esconder'}</Text>
                        <Ionicons name={this.state.isCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} color={colors.orange} />
                    </TouchableOpacity>
                </View>

                <Collapsible collapsed={this.state.isCollapsed} >
                    <FlatList
                        style={styles.holder}
                        data={data}
                        renderItem={this.renderITem}
                        keyExtractor={this._keyExtractor}
                        ListFooterComponent={this.ActivitiesFooter}
                        ItemSeparatorComponent={() => (
                            <View style={styles.separator} />
                        )}
                    />
                </Collapsible>
            </View>

        )
    }
}

const styles = StyleSheet.create(style)

export default ActivitiesComponent