// import * as LocalSession from '../utils/LocalSession'

import {
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    VERIFY_REGISTERED_USER_FAILURE,
    VERIFY_REGISTERED_USER_REQUEST,
    VERIFY_REGISTERED_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS
} from '../actions/usersActions'


const initialUserState = {
    isRegistered: false,
    isLogged: true,
    isFetching: false,
    fetchingError: false,
    lastUpdated: 0,
    profile: {
        "appActive": true,
        "birthday": "1995-05-27T00:00:00.000Z",
        "cpf": 23725843830,
        "email": "rabah.zeineddine@gmail.com",
        "feed": [],
        "gender": "Male",
        "id": "5cec448462df20285a091373",
        "name": "Rabah Zeineddine",
        "numberOfRedeems": 0,
        "placesVisited": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZWM0NDg0NjJkZjIwMjg1YTA5MTM3MyIsImV4cCI6MTU1OTg1MTkwOCwiaWF0IjoxNTU4OTg3OTA4fQ.ILEsvmW1FzbK5JKs-bEtFI4UHTQLi-Yh8r3YFX8OqHo",
        "visits": 0,
    }
}
// const initialUserState = {
//     isRegistered: false,
//     isLogged: false,
//     isFetching: false,
//     fetchingError: false,
//     lastUpdated: 0,
//     profile: {}
// }


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
                profile: { ...action.user }
            }
        default:
            return state
    }
}

export default user