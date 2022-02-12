import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {register} from '../../actions/authAction'

const useRegisterForm = (validate) =>{
    const dispatch = useDispatch()
    
    const [userInfo, setUserInfo] = useState({
        username:"", 
        email:"",
        password:"",
        rpassword: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target 
        setUserInfo({
            ...userInfo,
            [name]: value 
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        //use frontend validation on userInfo
        const errorsFound = await validate(userInfo)
        setErrors(errorsFound)

        //if no errors, dispatch register
        if(Object.keys(errorsFound).length ===0){
            dispatch(register(userInfo))
        }
    }

    return {handleChange, userInfo, handleSubmit, errors}
}

export default useRegisterForm