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
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation'
import colors from './src/utils/colors';
import MenuButton from './src/components/MenuButton';
import Menu from './src/components/Menu';
import TermsOfUse from './src/pages/TermsOfUse';
import PrivacyPolicies from './src/pages/PrivacyPolicies';
import Logout from './src/pages/Logout';
import Activity from './src/pages/Activity';
import LogoutRoot from './src/pages/LogoutRoot';


const navigationOptions = ({ navigation }) => ({
  headerMode: 'screen',
  headerTitle: <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Home')}>
    <Text style={{
      color: colors.white,
      fontSize: 24,
      fontFamily: 'Overpass-Bold',
      textAlign: 'center'
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
  },
  Activity: {
    screen: Activity,
    navigationOptions
  }
}, {
    initialRouteName: 'Home',
    unmountInactiveRoutes: true
  })

const ActivitiesNavigator = createStackNavigator({
  Activities: {
    screen: Activities,
    navigationOptions
  },
  Activity: {
    screen: Activity,
    navigationOptions
  }
})
const CouponsNavigator = createStackNavigator({
  Coupons: {
    screen: Coupons,
    navigationOptions
  }
})
const TermsOfUseNavigator = createStackNavigator({
  Coupons: {
    screen: TermsOfUse,
    navigationOptions
  }
})
const PrivacyPoliciesNavigator = createStackNavigator({
  Coupons: {
    screen: PrivacyPolicies,
    navigationOptions
  }
})
const LogoutNavigator = createStackNavigator({
  Coupons: {
    screen: Logout,
    navigationOptions
  }
})


const AppStack = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      drawerLabel: 'Início',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/home.png')} style={{ tintColor: tintColor, width: 40, height: 40 }}
        />
      )
    }
  },
  Activities: {
    screen: ActivitiesNavigator,
    navigationOptions: {
      drawerLabel: 'Atividades recentes',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/Activities.png')} style={{ tintColor: tintColor, width: 40, height: 40 }}
        />
      )
    }
  },
  Coupons: {
    screen: CouponsNavigator,
    navigationOptions: {
      drawerLabel: 'Cupons de resgate',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/Coupons.png')} style={{ tintColor: tintColor, width: 40, height: 40 }}
        />
      )
    }
  },
  TermsOfUse: {
    screen: TermsOfUseNavigator,
    navigationOptions: {
      drawerLabel: 'Termos de uso',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/Terms.png')} style={{ tintColor: tintColor, width: 40, height: 40 }}
        />
      )
    }
  },
  PrivacyPolicies: {
    screen: PrivacyPoliciesNavigator,
    navigationOptions: {
      drawerLabel: 'Políticas de privacidade',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/Policies.png')} style={{ tintColor: tintColor, width: 40, height: 40 }}
        />
      )
    }
  },
  Logout: {
    screen: LogoutNavigator,
    navigationOptions: {
      drawerLabel: 'Sair',
      drawerIcon: ({ tintColor }) => (
        <Image source={require('./src/assets/Logout.png')} style={{ tintColor: tintColor, width: 40, height: 40 }}
        />
      )
    }
  }
}, {
    initialRouteName: 'Home',
    unmountInactiveRoutes: true,
    contentComponent: props => <Menu {...props} />
  })

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
    Auth: AuthStack,
    LogoutRoot: LogoutRoot
  },
  {
    initialRouteName: 'AuthLoading',
    resetOnBlur: false
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