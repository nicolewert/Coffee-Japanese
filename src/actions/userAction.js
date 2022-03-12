import instance from '../axiosInstance/axios'
import * as actionType from './types'

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

export const updateUser = (userInfo, setEditUserError, token) =>async dispatch =>{
    instance.patch('/users/partialUpdateUser', {userInfo: userInfo}, {
        headers:{
            'x-auth-token':token
        }
    })
    .then( ()=>{
        dispatch(getUser(token))
        return {}
    })
    .catch(error=>{
            setEditUserError(error)
    })
}