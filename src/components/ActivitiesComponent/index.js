import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import Collapsible from 'react-native-collapsible'
import style from './style'

import { Ionicons } from '@expo/vector-icons'
import colors from '../../utils/colors';
import ActivityItem from './ActivityItem';
import { connect } from 'react-redux'
import Helper from '../../utils/helper';

class ActivitiesComponent extends React.Component {

    state = {
        isCollapsed: false
    }

    _keyExtractor = (item, index) => `${index}`

    renderITem = (item) => {
        return (
            <ActivityItem item={item.item} navigation={this.props.navigation} />
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
        let { feeds, user } = this.props

        if (user.isLogged) {


            if (this.props.limit) {
                feeds = Helper.cloneObject(feeds).splice(0, this.props.limit)
            }

            return (
                <View style={styles.holder}>
                    <View style={styles.header}>
                        <Text style={styles.title}>ATIVIDADES RECENTES</Text>
                        {feeds.length > 0 && (
                            <TouchableOpacity onPress={this.toggleCollapse} style={styles.headerBtn}>
                                <Text style={styles.headerBtnText}>{this.state.isCollapsed ? 'Ver todos' : 'Esconder'}</Text>
                                <Ionicons name={this.state.isCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} color={colors.orange} />
                            </TouchableOpacity>
                        )}
                    </View>

                    {feeds.length == 0 && (
                        <View>
                            <Text>Não há atividades recentes</Text>
                        </View>
                    )}

                    {feeds.length > 0 && (
                        <Collapsible collapsed={this.state.isCollapsed} style={styles.container} >
                            <FlatList
                                style={styles.container}
                                data={feeds}
                                renderItem={this.renderITem}
                                keyExtractor={this._keyExtractor}
                                ListFooterComponent={this.ActivitiesFooter}
                                ItemSeparatorComponent={() => (
                                    <View style={styles.separator} />
                                )}
                                contentContainerStyle={{ flexGrow: 1 }}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                            />
                        </Collapsible>
                    )}
                </View>

            )

        } else {
            return <View>
                <Text>Não há atividades recentes</Text>
            </View>
        }
    }
}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        feeds: user.profile.feeds,
        user
    }
}

export default connect(mapStateToProps)(ActivitiesComponent)