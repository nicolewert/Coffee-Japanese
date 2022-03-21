import React, { useEffect } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import classes from './Register.module.css' 
import { errorReset } from '../../actions/types'
import { useDispatch } from 'react-redux'

const Register = () => {
    
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch({
            type: errorReset
        })
    })

    return(
        <div className={classes.container}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faCoffee} className={classes.icon}/>
                <h1>Coffee Japanese</h1>
            </div>
        <RegisterForm/>
        <p>Already a member? <a href="/">Login here</a></p>
    </div>
    );
}

export default Register