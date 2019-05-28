import { env, headers } from '../config'
import Helper from './helper'
import ErrorHandler from './ErrorHandler'


export const login = async (user) => {

    return fetch(`${env.API}/userapp/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify(user)
    })
        .then(Helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err || 500).format())
        })
}

export const verifyRegisteredUser = async (user) => {
    return fetch(`${env.API}/userapp/cpf/check/${user.cpf}`, {
        headers,
        method: 'GET'
    }).then(Helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err || 500).format())
        })
}

export const signup = async (user) => {
    return fetch(`${env.API}/userapp/register`, {
        headers,
        method: 'POST',
        timeout: 5000,
        body: JSON.stringify(user)
    }).then(Helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err || 500).format())
        })
}