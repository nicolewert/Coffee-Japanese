import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/authAction'

const useLoginForm = (validate) =>{
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState({
        email: "", 
        password: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {name, value} = e.target
        setUserInfo({
            ...userInfo, 
            [name]: value
        })
    }

    const setLoginError = (error) =>{
        setErrors(error)
    } 

    const handleSubmit = async e =>{
        e.preventDefault()
        const errorsFound = await validate(userInfo)
        setErrors(errorsFound)

        if(Object.keys(errorsFound).length === 0){
            dispatch(login(userInfo, setLoginError))
        }
    }

    return {handleChange, userInfo, handleSubmit, errors}
}

export default useLoginForm
