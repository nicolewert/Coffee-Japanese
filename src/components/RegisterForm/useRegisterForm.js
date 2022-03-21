import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {register} from '../../actions/authAction'
import { error } from '../../actions/types'

const useRegisterForm = (validate) =>{
    const dispatch = useDispatch()
    
    const [userInfo, setUserInfo] = useState({
        username:"", 
        email:"",
        password:"",
        rpassword: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target 
        setUserInfo({
            ...userInfo,
            [name]: value 
        })
    }
     
    const handleSubmit = async e =>{
        e.preventDefault()

        const errorsFound = await validate(userInfo)
        dispatch({type: error, payload: errorsFound})
        
        if(Object.keys(errorsFound).length ===0){
            dispatch(register(userInfo))
        }
    }

    return {handleChange, userInfo, handleSubmit}
}

export default useRegisterForm