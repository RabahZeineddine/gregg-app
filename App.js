import React from 'react';
import CPF from './src/pages/CPF'
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import AuthLoadingScreen from './src/pages/AuthLoadingScreen'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import thunk from 'redux-thunk'

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

const AppStack = createStackNavigator({
  Home: {
    screen: Home
  }
})

const AuthStack = createStackNavigator(
  {
    CPF: {
      screen: CPF
    },
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    }
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
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}