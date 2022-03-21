import { logout } from '../actions/authAction'

export const authFailureError = (error)=> async dispatch=>{
    if (error.response.status ===401 || error.response.status===403) {
        dispatch(logout())
    }
}