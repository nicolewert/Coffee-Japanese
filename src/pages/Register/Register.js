import React from 'react'; 
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import classes from './Register.module.css'; 

const Register = () => {

    return(
        <div className={classes.container}>
            <div className={classes.logo}>
                <FontAwesomeIcon icon={faCoffee} className={classes.icon}/>
                <h1>Coffee Japanese</h1>
            </div>
        <RegisterForm/>
        <p>Already a member? <a href="/Login">Login here</a></p>
    </div>
    );
}

export default Register; 