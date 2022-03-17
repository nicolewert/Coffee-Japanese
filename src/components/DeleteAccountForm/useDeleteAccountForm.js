import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../actions/userAction'

const useDeleteAccountForm = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector(state =>{
        return state.auth.token
    })

    const [password, setPassword] = useState({
        password: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target 
        setPassword({
            ...password,
            [name]: value 
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()

        if(password.password){
             dispatch(deleteUser(password.password, token))
        }else{
            navigate("/user-profile")
        }
    }
    return {handleChange, password, handleSubmit}
}

export default useDeleteAccountForm