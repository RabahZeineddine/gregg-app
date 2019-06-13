import * as UserAPI from '../utils/usersAPI'
import { AsyncStorage } from 'react-native'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'

export const VERIFY_REGISTERED_USER_REQUEST = 'VERIFY_REGISTERED_USER_REQUEST'
export const VERIFY_REGISTERED_USER_FAILURE = 'VERIFY_REGISTERED_USER_FAILURE'
export const VERIFY_REGISTERED_USER_SUCCESS = 'VERIFY_REGISTERED_USER_SUCCESS'

export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'

export const CHECKIN_INFO_REQUEST = 'CHECKIN_INFO_REQUEST'
export const CHECKIN_INFO_FAILURE = 'CHECKIN_INFO_FAILURE'
export const CHECKIN_INFO_SUCCESS = 'CHECKIN_INFO_SUCCESS'

export const REDEEMS_REQUEST = 'REDEEMS_REQUEST'
export const REDEEMS_FAILURE = 'REDEEMS_FAILURE'
export const REDEEMS_SUCCESS = 'REDEEMS_SUCCESS'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'


const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        user
    }
}

const loginUserFailure = (error) => {
    return {
        type: LOGIN_USER_FAILURE,
        error
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}

export const login = (user) => dispatch => {
    dispatch(loginUserRequest())
    return UserAPI
        .login(user)
        .then(loggedUser => {
            AsyncStorage.setItem('token', loggedUser.token)
            return dispatch(loginUserSuccess(loggedUser))
        })
        .catch(err => dispatch(loginUserFailure(err)))
}

const verifyRegisteredUserRequest = () => {
    return {
        type: VERIFY_REGISTERED_USER_REQUEST
    }
}

const verifyRegisteredUserFailure = (error) => {
    return {
        type: VERIFY_REGISTERED_USER_FAILURE,
        error
    }
}

const verifyRegisteredUserSuccess = ({ isAppUser }, cpf) => {
    return {
        type: VERIFY_REGISTERED_USER_SUCCESS,
        isAppUser,
        cpf
    }
}

export const verifyRegisteredUser = (user) => dispatch => {
    dispatch(verifyRegisteredUserRequest())
    return UserAPI
        .verifyRegisteredUser(user)
        .then(result => {
            return dispatch(verifyRegisteredUserSuccess(result, user.cpf))
        })
        .catch(err => dispatch(verifyRegisteredUserFailure(err)))
}


const signupUserRequest = () => {
    return {
        type: SIGNUP_USER_REQUEST
    }
}

const signupUserSuccess = (user) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        user
    }
}

const signupUserFailure = (error) => {
    return {
        type: SIGNUP_USER_FAILURE,
        error
    }
}

export const signup = (user) => dispatch => {
    dispatch(signupUserRequest())
    return UserAPI
        .signup(user)
        .then(newUser => {
            AsyncStorage.setItem('token', newUser.token)
            return dispatch(signupUserSuccess(newUser))
        })
        .catch(err => dispatch(signupUserFailure(err)))
}


const checkinInfoRequest = () => {
    return {
        type: CHECKIN_INFO_REQUEST
    }
}

const checkinInfoSuccess = (store) => {
    return {
        type: CHECKIN_INFO_SUCCESS,
        store
    }
}

const checkinInfoFailure = (error) => {
    return {
        type: CHECKIN_INFO_FAILURE,
        error
    }
}

export const checkinInfo = (store) => dispatch => {
    dispatch(checkinInfoRequest())
    return UserAPI
        .checkinInfo(store)
        .then((storeInfo) => dispatch(checkinInfoSuccess(storeInfo)))
        .catch(err => dispatch(checkinInfoFailure(err)))
}

const redeemsRequest = () => {
    return {
        type: REDEEMS_REQUEST
    }
}

const redeemsFailure = (error) => {
    return {
        type: REDEEMS_FAILURE,
        error
    }
}

const redeemsSuccess = (redeems) => {
    return {
        type: REDEEMS_SUCCESS,
        redeems
    }
}

export const getRedeems = () => dispatch => {
    dispatch(redeemsRequest())
    return UserAPI
        .getRedeems()
        .then((redeems) => dispatch(redeemsSuccess(redeems)))
        .catch(err => dispatch(redeemsFailure(err)))
}