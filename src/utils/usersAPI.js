import { env, headers } from '../config'
import Helper from './helper'
import ErrorHandler from './ErrorHandler'


const helper = new Helper()



export const login = async (user) => {

    return fetch(`${env.API}/auth/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify(user)
    })
        .then(helper.checkFetchResponse)
        .catch(err => {
            console.log('Error')
            console.log(err)
        })
}

export const verifyRegisteredUser = async (user) => {
    return fetch(`${env.API}/users?cpf=${user.cpf}`, {
        headers,
        method: 'GET'
    }).then(helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err.status || 500).format())
        })
}

export const signup = async (user) => {
    return fetch(`${env.API}/users/`, {
        headers,
        method: 'POST',
        timeout: 5000,
        body: JSON.stringify(user)
    }).then(helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err.status || 500).format())
        })
}