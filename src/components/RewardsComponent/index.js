import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'

import style from './style'
import RewardItem from './RewardItem';


class RewardsComponent extends React.Component {

    _keyExtractor = (item, index) => `${index}`

    _renderItem = (item) => {
        return (
            <RewardItem item={item.item} score={this.props.score} />
        )
    }

    render() {
        return (
            <View style={styles.holder}>
                <Text style={styles.title} >RECOMPENSAS</Text>
                <FlatList
                    style={styles.items}
                    data={this.props.items}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

export default RewardsComponent