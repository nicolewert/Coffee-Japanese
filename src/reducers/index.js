import {combineReducers} from 'redux'
import authReducer from "./authSlice"
import { logout } from '../actions/types'
import storage from 'redux-persist/lib/storage'
import userReducer from './userSlice'
import errorReducer from './errorSlice'

const appReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    error: errorReducer
})

const rootReducer = (state, action) =>{
    if (action.type === logout){
        storage.removeItem('persist:root')
        localStorage.clear()
        return appReducers(undefined, action)
    }
    return appReducers(state, action)
}

export default rootReducer