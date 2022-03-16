import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { error } from "../../actions/types"

const useChangePasswordForm = validate =>{
    const dispatch = useDispatch()
    const [passwordInfo, setPasswordInfo] = useState({
        oldpassword: "", 
        newpassword: "", 
        rpassword: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target 
        setPasswordInfo({
            ...passwordInfo,
            [name]: value 
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault()


        if( passwordInfo.oldpassword || passwordInfo.newpassword || passwordInfo.rpassword){
            const errorsFound = await validate(passwordInfo)
            if(Object.keys(errorsFound).length>0) {
                dispatch({type: error, payload: errorsFound})
            }else{
        }
    }

    return {handleChange, passwordInfo, handleSubmit}
}

export default useChangePasswordForm