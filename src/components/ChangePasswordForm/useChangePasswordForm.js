import { useState } from "react"

const useChangePasswordForm = validate =>{
    const [passwordInfo, setPasswordInfo] = useState({
        oldpassword: "", 
        newpassword: "", 
        rpassword: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target 
        setPasswordInfo({
            ...passwordInfo,
            [name]: value 
        })
    }

    const setChangePasswordError = (error) =>{
        setErrors(error)
    }

    const handleSubmit = async e =>{
        e.preventDefault()

        //use frontend validation on passwordInfo
        const errorsFound = await validate(passwordInfo)
        setErrors(errorsFound)

        //if no errors, dispatch register
        if(Object.keys(errorsFound).length ===0){
            //todo call backend
        }
    }

    return {handleChange, passwordInfo, handleSubmit, errors}
}

export default useChangePasswordForm