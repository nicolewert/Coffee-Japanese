import instance from '../axiosInstance/axios';
import * as actionType from './types'; 
import { getUser} from '../actions/userAction'

export const register = (userInfo) => async dispatch => { 
    instance.post('/users/register', userInfo)
    .then(res => {
        localStorage.setItem('token', res.data);
        dispatch({
            type: actionType.registerSuccess,
        })
        dispatch({
            type: actionType.success
        })
        dispatch(getUser(res.data))
     })
    .catch(error =>{
        dispatch({
            type: actionType.error,
            payload: {"registerError": error.response.data}
        })
        dispatch({
            type: actionType.authFailure
        })
    })

}

export const login = (userInfo) =>async dispatch =>{
    instance.post('/auth/login', userInfo)
    .then(res =>{
        localStorage.setItem('token', res.data);
        dispatch({
            type: actionType.loginSuccess,
        })
        dispatch({type: actionType.success})
        dispatch(getUser(res.data))
    })
    .catch(error => {
        dispatch({
            type: actionType.error,
            payload: {"loginError": error.response.data}
        })
        dispatch({
            type: actionType.authFailure,
        })
    })
}

export const logout = () => dispatch =>{
    localStorage.removeItem('token')
    dispatch({
        type: actionType.logout
    })
}