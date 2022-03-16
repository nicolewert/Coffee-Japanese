import * as actionType from "../actions/types"

const initialState ={
    error: null,
    errorChecked : false
}

function errorReducer(state = initialState, action){
    const {type} = action
    switch(type){
        case actionType.error:
            return{
                error: action.payload,
                errorChecked: true
            }
        case actionType.success:
            return{
                error: null,
                errorChecked: true
            }
        case actionType.errorReset:
            return initialState
        default:
            return state
    }
}
export default errorReducer