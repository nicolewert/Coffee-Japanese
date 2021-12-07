import {useState} from 'react'
import instance from '../../axiosInstance/axios'

const useLoginForm = (validate) =>{
    const [userInfo, setUserInfo] = useState({
        email: "", 
        password: ""
    })
    const [errors, setErrors] = useState({})
    const [submitFailure, setSubmitFailure] = useState({message:""})

    const handleChange = e => {
        const {name, value} = e.target
        setUserInfo({
            ...userInfo, 
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setErrors(validate(userInfo))
        console.log(userInfo)
        if(Object.keys(errors).length ===0){
            instance.post('/Login', userInfo)
            .then(res =>{
                console.log(res.data)
                window.location ="/Home"
            })
            .catch(error => {
                setSubmitFailure({message:  error.response.data})
                console.log(error)
            })
        }
    }

    return {handleChange, userInfo, handleSubmit, errors, submitFailure}
}

export default useLoginForm
