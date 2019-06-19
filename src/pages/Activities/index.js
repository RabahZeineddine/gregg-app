import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'

import style from './style'

import ActivityItem from '../../components/ActivitiesComponent/ActivityItem';

import { connect } from 'react-redux'


class Activities extends React.Component {

    state = {
        isCollapsed: false,
        getRedeem: false,
        itemResgatado: false,
        itemCode: ''
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

    render() {
        let { feeds } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.holder}>
                    <View style={styles.header}>
                        <Text style={styles.title}>ATIVIDADES RECENTES</Text>
                    </View>
                    {feeds.length == 0 && (
                        <View>
                            <Text>Não há atividades recentes!</Text>
                        </View>
                    )}
                    {feeds.length > 0 && (

                        <FlatList
                            style={{ flex: 1 }}
                            data={feeds}
                            renderItem={this.renderITem}
                            keyExtractor={this._keyExtractor}
                            ItemSeparatorComponent={() => (
                                <View style={styles.separator} />
                            )}
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        feeds: user.profile.feeds,
        user
    }
}

export default connect(mapStateToProps)(Activities)