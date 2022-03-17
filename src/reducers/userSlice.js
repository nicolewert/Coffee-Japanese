import * as actionType from "../actions/types"

const initialState ={
    user: null,
    loading: true
}

function userReducer(state = initialState, action){
    const {type} = action
    switch(type){
        case actionType.getUser:
            return{
                ...state, 
                user: action.payload,
                loading: false
            }
        case actionType.userError:
            return{
                ...state, 
                loading: false, 
                user : null
            }
        default: 
            return state; 
    }
}
export default userReducer