import React from 'react';
import CPF from './src/pages/CPF'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import SignupIntroduction from './src/pages/Signup/Introduction'
import Signup from './src/pages/Signup'
import AuthLoadingScreen from './src/pages/AuthLoadingScreen'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import thunk from 'redux-thunk'
import { Font } from 'expo';
import Activities from './src/pages/Activities'
import Coupons from './src/pages/Coupons'
import { View, Text, TouchableOpacity } from 'react-native'

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation'
import colors from './src/utils/colors';
import MenuButton from './src/components/MenuButton';
import Menu from './src/components/Menu';


const navigationOptions = ({ navigation }) => ({
  headerMode: 'screen',
  headerTitle: <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Text style={{
      color: colors.white,
      fontSize: 24,
      fontFamily: 'Overpass-Bold',
      textAlign: 'center',
      flex: 1
    }}>gregg</Text>
  </TouchableOpacity>,
  headerStyle: {
    backgroundColor: colors.orange
  },
  headerLeft: (<MenuButton onPress={navigation.openDrawer} />),
  headerRight: (<View />)
})

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions
  }
})

const ActivitiesNavigator = createStackNavigator({
  Activities: {
    screen: Activities,
    navigationOptions
  }
})
const CouponsNavigator = createStackNavigator({
  Coupons: {
    screen: Coupons,
    navigationOptions
  }
})

const AppStack = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerLabel: 'Início'
    }
  },
  Activities: {
    screen: ActivitiesNavigator,
    navigationOptions: {
      drawerLabel: 'Atividades recentes'
    }
  },
  Coupons: {
    screen: CouponsNavigator,
    navigationOptions: {
      drawerLabel: 'Cupons de resgate'
    }
  }
},
  {
    initialRouteName: 'Home',
    contentComponent: props => <Menu {...props} />
  }
)

const AuthStack = createStackNavigator(
  {
    CPF: {
      screen: CPF
    },
    Login: {
      screen: Login
    },
    SignupIntroduction: {
      screen: SignupIntroduction
    },
    Signup: {
      screen: Signup
    },
  },
  {
    initialRouteName: 'CPF'
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
))

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

const store = createStore(
  reducer,
  composeEnhancer(
    applyMiddleware(thunk)
  )
)

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {

    await Font.loadAsync({
      'Overpass-SemiBold': require('./src/assets/fonts/Overpass-SemiBold.ttf'),
      'Overpass-Light': require('./src/assets/fonts/Overpass-Light.ttf'),
      'Overpass-Regular': require('./src/assets/fonts/Overpass-Regular.ttf'),
      'Overpass-Bold': require('./src/assets/fonts/Overpass-Bold.ttf'),
      'Overpass-ExtraBold': require('./src/assets/fonts/Overpass-ExtraBold.ttf')
    })

    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <Provider store={store}>
        {this.state.fontLoaded ?
          <AppContainer />
          : null
        }
      </Provider>
    );
  }
}