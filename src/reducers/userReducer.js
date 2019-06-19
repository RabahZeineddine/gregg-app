// import * as LocalSession from '../utils/LocalSession'

import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    VERIFY_REGISTERED_USER_FAILURE,
    VERIFY_REGISTERED_USER_REQUEST,
    VERIFY_REGISTERED_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    CHECKIN_INFO_FAILURE,
    CHECKIN_INFO_REQUEST,
    CHECKIN_INFO_SUCCESS,
    REDEEMS_FAILURE,
    REDEEMS_REQUEST,
    REDEEMS_SUCCESS,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS
} from '../actions/usersActions'


const initialUserState = {
    isRegistered: false,
    isLogged: false,
    isFetching: false,
    fetchingError: false,
    lastUpdated: 0,
    profile: {}
}


function user(state = initialUserState, action) {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isLogged: false,
                isRegistered: false,
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
                ...state,
                isLogged: false,
                isFetching: false,
                fetchingError: true,
                error: action.error,
                lastUpdated: new Date()
            }

        case VERIFY_REGISTERED_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchingError: false,
                error: null,
                isRegistered: false,
                isLogged: false,
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
                isRegistered: action.isAppUser,
                isLogged: action.isAppUser,
                profile: { cpf: action.cpf }
            }
        case SIGNUP_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchingError: false,
                error: null,
                isRegistered: false
            }

        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetchingError: true,
                error: action.error,
                lastUpdated: new Date()
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchingError: false,
                lastUpdated: new Date(),
                isRegistered: action.user ? true : false,
                isLogged: action.user ? true : false,
                profile: { ...action.user }
            }

        case CHECKIN_INFO_REQUEST:
            return {
                ...state,
                checkinInfo: {
                    isFetching: true,
                    fetchingError: false,
                    error: null
                }
            }

        case CHECKIN_INFO_FAILURE:
            return {
                ...state,
                checkinInfo: {
                    isFetching: false,
                    fetchingError: true,
                    error: action.error
                }
            }
        case CHECKIN_INFO_SUCCESS:
            return {
                ...state,
                checkinInfo: {
                    isFetching: false,
                    ...action.store
                }
            }

        case REDEEMS_REQUEST:
            return {
                ...state,
                redeems: {
                    isFetching: true,
                    fetchingError: false,
                    error: null,
                    items: []
                }
            }
        case REDEEMS_FAILURE:
            return {
                ...state,
                redeems: {
                    isFetching: false,
                    fetchingError: true,
                    error: action.error
                }
            }
        case REDEEMS_SUCCESS:
            return {
                ...state,
                redeems: {
                    isFetching: false,
                    items: action.redeems
                }
            }

        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                loggingOut: true
            }

        case LOGOUT_USER_SUCCESS:
            return {
                ...initialUserState
            }

        default:
            return state
    }
}

export default user