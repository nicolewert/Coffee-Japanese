import * as actionType from "../actions/types"

const initialState = {
    token: null,
    isAuthenticated: false, 
    loading: true
}
function authReducer(state = initialState, action){
    
    const {type} = action; 
    switch(type){
        case actionType.registerSuccess:
        case actionType.loginSuccess:
            return {
                ...state,
                token: localStorage.getItem('token'),
                isAuthenticated: true, 
                loading: false
            }
        case actionType.authFailure:
            return {
                ...state, 
                token: null, 
                isAuthenticated: false,
                loading: false 
            }
        default: 
            return state; 
    }

}

export default authReducer