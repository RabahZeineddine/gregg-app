import { env, headers } from '../config'
import Helper from './helper'
import ErrorHandler from './ErrorHandler'
import { AsyncStorage } from 'react-native'


const getToken = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('token').then(token => {
            resolve(`Bearer ${token}`)
        })
    })
}


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

export const checkinInfo = async (storeId) => {
    let token = await getToken()
    return fetch(`${env.API}/userapp/store/${storeId}`, {
        headers: {
            ...headers,
            Authorization: token
        },
        method: 'GET'
    }).then(Helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err || 500).format())
        })
}

export const getRedeems = async () => {
    let token = await getToken()
    return fetch(`${env.API}/userapp/redeems`, {
        headers: {
            ...headers,
            Authorization: token
        },
        method: 'GET'
    }).then(Helper.checkFetchResponse)
        .catch(err => {
            return Promise.reject(new ErrorHandler(err || 500).format())
        })
}