import instance from '../axiosInstance/axios';
import * as actionType from './types'; 

export const register = (userInfo) => async dispatch => { 
    instance.post('/users/register', userInfo)
    .then(res => {
        localStorage.setItem('token', res.data);
        dispatch({
            type: actionType.registerSuccess,
        })
     })
    .catch(error =>{

export const login = (userInfo, setLoginError) =>async dispatch =>{
    instance.post('/auth/login', userInfo)
    .then(res =>{
        localStorage.setItem('token', res.data);
        dispatch({
            type: actionType.loginSuccess,
        })
        return {}
    })
    .catch(error => {
        setLoginError({"loginError": error.response.data})
        dispatch({
            type: actionType.authFailure,
        })
    })
}

}