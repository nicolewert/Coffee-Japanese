import React, {useState} from 'react'; 
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import classes from './Register.module.css'; 

const Register = () => {
    const [user, setUser] = useState({username: "", email: "", password:"", rpassword: ""})
    const [error, setError] = useState(null)

    const SignUp = info =>{
        console.log(info)
    }

    return(
    <div className={classes.container}>
        <div className={classes.logo}>
            <FontAwesomeIcon icon={faCoffee} className={classes.icon}/>
            <h1>Coffee Japanese</h1>
        </div>
        <RegisterForm SignUp={SignUp} error={error}/>
        <p>Already a member? <strong>Login here</strong></p>
    </div>
    );
}

export default Register; 