import {combineReducers} from 'redux'
import authReducer from "./authSlice"
import { logout } from '../actions/types'
import storage from 'redux-persist/lib/storage'

const appReducers = combineReducers({
    auth: authReducer
})

const rootReducer = (state, action) =>{
    if (action.type === logout){
        storage.removeItem('persist:root')
        return appReducers(undefined, action)
    }
    return appReducers(state, action)
}

export default rootReducer