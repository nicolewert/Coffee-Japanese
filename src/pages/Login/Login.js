import React, { useEffect } from 'react' 
import LoginForm from "../../components/LoginForm/LoginForm"
import classes from './Login.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { errorReset } from '../../actions/types'
import { useDispatch } from 'react-redux'

const Login = () =>{
    
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch({
            type: errorReset
        })
    })

    return(
        <div className={classes.container}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faCoffee} className={classes.Icon}/>
                <h1>Coffee Japanese</h1>
            </div>
            <LoginForm/>
            <p>Not already a member? <a href="/Register">Register here</a></p>
        </div>
    );
}

export default Login