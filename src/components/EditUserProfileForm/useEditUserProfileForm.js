import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateUser} from '../../actions/userAction'
import { useNavigate } from 'react-router-dom'

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
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target 
        setUserInfo({
            ...userInfo,
            [name]: value 
        })
    }

    const setEditUserError = (error) =>{
        setErrors(error)
    }
     
    const handleSave = async e =>{
        e.preventDefault()

        Object.keys(userInfo).forEach( key => userInfo[key].trim())

        if(userInfo.username || userInfo.email|| userInfo.japaneseLevel){
            //use frontend validation on userInfo
            const errorsFound = await validate(userInfo)
            setErrors(errorsFound)

            //if no errors, update
            if(Object.keys(errorsFound).length ===0){ 
                dispatch(updateUser(userInfo, setEditUserError, token))
                .then(()=> navigate("/user-profile"))
            }    
        }
        
        navigate("/user-profile")      
    }

    return {handleChange, userInfo, handleSave, errors}
}

export default useEditUserProfileForm