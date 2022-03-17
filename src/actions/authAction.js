import instance from '../axiosInstance/axios';
import * as actionType from './types'; 
import { getUser} from '../actions/userAction'

export const register = (userInfo, setRegisterError) => async dispatch => { 
    instance.post('/users/register', userInfo)
    .then(res => {
        localStorage.setItem('token', res.data);
        dispatch({
            type: actionType.registerSuccess,
        })
        dispatch(getUser(res.data))
        return {}
     })
    .catch(error =>{
        setRegisterError({"registerError": error.response.data})
        dispatch({
            type: actionType.authFailure
        })
    })

}

export const login = (userInfo, setLoginError) =>async dispatch =>{
    instance.post('/auth/login', userInfo)
    .then(res =>{
        localStorage.setItem('token', res.data);
        dispatch({
            type: actionType.loginSuccess,
        })
        dispatch(getUser(res.data))
        return {}
    })
    .catch(error => {
        setLoginError({"loginError": error.response.data})
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