import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/authAction'
import { error } from '../../actions/types'

const useLoginForm = (validate) =>{
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState({
        email: "", 
        password: ""
    })

    const handleChange = e => {
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

        if(Object.keys(errorsFound).length === 0){
            dispatch(login(userInfo))
        }
    }

    return {handleChange, userInfo, handleSubmit}
}

export default useLoginForm
