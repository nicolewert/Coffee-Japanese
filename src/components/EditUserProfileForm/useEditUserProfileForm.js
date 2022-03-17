import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateUser} from '../../actions/userAction'
import { useNavigate } from 'react-router-dom'
import { error } from '../../actions/types'

const useEditUserProfileForm = (validate) =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const token = useSelector(state =>{
        return state.auth.token
    })

    const [userInfo, setUserInfo] = useState({
        username:"",
        email:"", 
        japaneseLevel:""
    })

    const handleChange = e =>{
        const {name, value} = e.target 
        setUserInfo({
            ...userInfo,
            [name]: value 
        })
    }
     
    const handleSave = async e =>{
        e.preventDefault()

        Object.keys(userInfo).forEach( key => userInfo[key].trim())

        if(userInfo.username || userInfo.email|| userInfo.japaneseLevel){
            const errorsFound = await validate(userInfo)
            dispatch({type: error, payload: errorsFound})

            if(Object.keys(errorsFound).length ===0){ 
                dispatch(updateUser(userInfo, token))                
            }  
        }else{
            navigate("/user-profile")
        }      
    }

    return {handleChange, userInfo, handleSave}
}

export default useEditUserProfileForm