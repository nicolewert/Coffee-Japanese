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
        dispatch({
            type: actionType.authFailure,
            payload: {
                "status": error.response.status,
                "message": error.response.data 
            }
        })
    })

}