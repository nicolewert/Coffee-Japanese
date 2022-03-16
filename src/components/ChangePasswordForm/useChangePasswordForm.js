import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { changeUserPassword } from '../../actions/userAction'
import { useNavigate } from 'react-router-dom'
import { error } from "../../actions/types"

const useChangePasswordForm = validate =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(state =>{
        return state.auth.token
    })

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

        Object.keys(passwordInfo).forEach(key => passwordInfo[key].trim())

        if( passwordInfo.oldpassword || passwordInfo.newpassword || passwordInfo.rpassword){
            const errorsFound = await validate(passwordInfo)
            if(Object.keys(errorsFound).length>0) {
                dispatch({type: error, payload: errorsFound})
            }else{
                dispatch(changeUserPassword(passwordInfo, token))
            }
        }else{
            navigate("/user-profile")
        }
    }

    return {handleChange, passwordInfo, handleSubmit}
}

export default useChangePasswordForm