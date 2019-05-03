// import * as LocalSession from '../utils/LocalSession'

import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    VERIFY_REGISTERED_USER_FAILURE,
    VERIFY_REGISTERED_USER_REQUEST,
    VERIFY_REGISTERED_USER_SUCCESS
} from '../actions/usersActions'


const initialUserState = {
    // isLogged: LocalSession.sessionCheck('user'),
    isRegistered: false,
    isLogged: false,
    isFetching: false,
    fetchingError: false,
    lastUpdated: 0,
    // profile: LocalSession.getSession('user') || {}
    profile: {}
}


function user(state = initialUserState, action) {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchingError: false,
                error: null
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLogged: true,
                isFetching: false,
                profile: { ...action.user },
                lastUpdated: new Date()
            }
        case LOGIN_USER_FAILURE:
            return {
                isLogged: false,
                isFetching: false,
                fetchingError: true,
                error: action.error,
                lastUpdated: new Date(),
                profile: {}
            }
        case LOGOUT_USER:
            return {
                ...initialUserState
            }

        case VERIFY_REGISTERED_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchingError: false,
                error: null,
                isRegistered: false
            }

        case VERIFY_REGISTERED_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetchingError: true,
                error: action.error,
                lastUpdated: new Date()
            }
        case VERIFY_REGISTERED_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchingError: false,
                lastUpdated: new Date(),
                isRegistered: action.users.length > 0,
                profile: action.users.length > 0 ? action.users[0] : {}
            }
        default:
            return state
    }
}

export default user