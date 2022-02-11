import * as actionType from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false, 
    loading: true, 
    error: null
}
function authReducer(state = initialState, action){
    
    const {type, payload} = action; 
    switch(type){
        case actionType.registerSuccess:
            return {
                ...state,
                isAuthenticated: true, 
                loading: false
            }
        case actionType.authFailure:
            return {
                ...state, 
                token: null, 
                isAuthenticated: false,
                loading: false, 
                error: payload
            }
        default: 
            return state; 
    }

}

export default authReducer