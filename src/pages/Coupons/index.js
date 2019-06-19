import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'

import style from './style'

import { Ionicons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import colors from '../../utils/colors';
import CouponItem from './CouponItem';
import CustomModal from '../../components/CustomModal';
import { connect } from 'react-redux'
import { getRedeems } from '../../actions/usersActions';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';

class Coupons extends React.Component {

    state = {
        isCollapsed: false,
    }

    componentDidMount() {

        this.props.getRedeems()
    }

    _keyExtractor = (item, index) => `${index}`

    renderITem = (item) => {
        return (
            <CouponItem item={item.item} />
        )
    }

    toggleCollapse = () => {
        this.setState((previousState) => ({
            isCollapsed: !previousState.isCollapsed
        }))
    }

    render() {

        const { redeems } = this.props

        return (
            <View style={styles.container}>
                {redeems && redeems.isFetching && (
                    <CustomActivityIndicator />
                )}
                <View style={styles.holder}>
                    <View style={styles.header}>
                        <Text style={styles.title}>SEUS CUPONS</Text>
                        {/* <TouchableOpacity onPress={this.toggleCollapse} style={styles.headerBtn}>
                            <Text style={styles.headerBtnText}>{this.state.isCollapsed ? 'Ver todos' : 'Esconder'}</Text>
                            <Ionicons name={this.state.isCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'} size={30} color={colors.orange} />
                        </TouchableOpacity> */}
                    </View>
                    {redeems && !redeems.isFetching && redeems.items && redeems.items.length == 0 && (
                        <View>
                            <Text>Não há cupons disponiveis!</Text>
                        </View>
                    )}
                    {redeems && !redeems.isFetching && redeems.items && redeems.items.length > 0 && (
                        // <Collapsible collapsed={this.state.isCollapsed} style={{ flexGrow: 1 }} contentContainerStyle={{ flexGrow: 1 }} >
                        <FlatList
                            style={[styles.holder, { flexGrow: 1 }]}
                            data={redeems.items}
                            renderItem={this.renderITem}
                            keyExtractor={this._keyExtractor}
                            ItemSeparatorComponent={() => (
                                <View style={styles.separator} />
                            )}
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                        // </Collapsible>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(style)

const mapStateToProps = ({ user }) => {
    return {
        redeems: user.redeems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRedeems: () => dispatch(getRedeems())
    }
}

export default connect
    (mapStateToProps,
        mapDispatchToProps
    )
    (Coupons)