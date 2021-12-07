import {useState} from 'react'
import instance from '../../axiosInstance/axios.js'

const useRegisterForm = (validate) =>{
    const [userInfo, setUserInfo] = useState({
        username:"", 
        email:"",
        password:"",
        rpassword: ""
    })
    const [errors, setErrors] = useState({})
    const [submitFailure, setSubmitFailure] = useState({message:""})

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
        setErrors(errorsFound)
        console.log(userInfo)
        if(Object.keys(errorsFound).length ===0){
            instance.post('/Register', userInfo)
            .then(res => {
                console.log(res.data)
                window.location ="/Home"
            })
            .catch(error =>{
                setSubmitFailure({message: error.response.data})
                console.log(error)
            })
        }
    }

    return {handleChange, userInfo, handleSubmit, errors, submitFailure}
}

export default useRegisterForm