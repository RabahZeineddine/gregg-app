import * as UserAPI from '../utils/usersAPI'

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

const verifyRegisteredUserSuccess = (users, cpf) => {
    return {
        type: VERIFY_REGISTERED_USER_SUCCESS,
        users,
        cpf
    }
}

export const verifyRegisteredUser = (user) => dispatch => {
    dispatch(verifyRegisteredUserRequest())
    return UserAPI
        .verifyRegisteredUser(user)
        .then(users => {
            return dispatch(verifyRegisteredUserSuccess(users, user.cpf))
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
            return dispatch(signupUserSuccess(newUser))
        })
        .catch(err => dispatch(signupUserFailure(err)))
}