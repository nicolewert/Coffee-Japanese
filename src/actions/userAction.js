import instance from '../axiosInstance/axios'
import * as actionType from './types'
import { logout } from './authAction'

export const getUser = (token) =>async dispatch =>{
    instance.get('/users/getUser', {
        headers:{
            'x-auth-token':token
        }
    })
    .then(res =>{
        dispatch({
            type: actionType.getUser,
            payload: res.data
        })
    })
    .catch(()=>{
        dispatch({
            type: actionType.userError
        })
    })
}

export const updateUser = (userInfo, token) =>async dispatch =>{
    instance.patch('/users/partialUpdateUser', {userInfo: userInfo}, {
        headers:{
            'x-auth-token':token
        }
    })
    .then(()=>{
        dispatch(getUser(token))
        dispatch({
            type: actionType.success,
        })
    })
    .catch(error=>{
        dispatch({
            type:actionType.error,
            payload: {"updateError": error.response.data} 
        })
    })
}

export const changeUserPassword = (passwordInfo, token) => async dispatch =>{
    instance.patch('/users/changeUserPassword', {passwordInfo: passwordInfo},{
        headers:{
            'x-auth-token':token
        }
    })
    .then(()=>{
        dispatch({
            type: actionType.success
        })
    })
    .catch(error=>{
        dispatch({
            type: actionType.error, 
            payload: {"changePasswordError": error.response.data}
        })
    })
}

export const deleteUser = (password, token) => async dispatch=>{
    instance.delete('/users/deleteUser', {
        headers:{
            'x-auth-token':token
        },
        data:{
            password: password
        }
    })
    .then(()=>{
        dispatch({
            type: actionType.success
        })
        dispatch(logout())
    })
    .catch(error=>{
        dispatch({
            type: actionType.error,
            payload: {"deleteAccountError": error.response.data}
        })
    })
}