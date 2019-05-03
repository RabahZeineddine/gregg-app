import * as UserAPI from '../utils/usersAPI'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGOUT_USER = 'LOGOUT_USER'

export const VERIFY_REGISTERED_USER_REQUEST = 'VERIFY_REGISTERED_USER_REQUEST'
export const VERIFY_REGISTERED_USER_FAILURE = 'VERIFY_REGISTERED_USER_FAILURE'
export const VERIFY_REGISTERED_USER_SUCCESS = 'VERIFY_REGISTERED_USER_SUCCESS'


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

const verifyRegisteredUserSuccess = (users) => {
    return {
        type: VERIFY_REGISTERED_USER_SUCCESS,
        users
    }
}

export const verifyRegisteredUser = (user) => dispatch => {
    dispatch(verifyRegisteredUserRequest())
    return UserAPI
        .verifyRegisteredUser(user)
        .then(users => {
            return dispatch(verifyRegisteredUserSuccess(users))
        })
        .catch(err => dispatch(verifyRegisteredUserFailure(err)))
}