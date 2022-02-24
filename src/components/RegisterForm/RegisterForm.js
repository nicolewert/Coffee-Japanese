import React, {useEffect} from 'react';
import classes from './RegisterForm.module.css'
import useRegisterForm from './useRegisterForm'
import validate from './validateUserInfo'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const {handleChange, userInfo, handleSubmit, errors} = useRegisterForm(validate)
    const isAuthenticated = useSelector((state)=>{return state.auth.isAuthenticated})

    let navigate = useNavigate()
    useEffect(()=>{
        if (isAuthenticated){
            navigate("/home")
        }
    })

    return(
        <form className={classes.registerFormContainer} onSubmit={handleSubmit}> 
            <div className={classes.formItem}>
                <label className={classes.formLabel}>Username</label>
                <input 
                    id = "username"
                    className = {classes.formInput}
                    type = "text" 
                    name = "username" 
                    value = {userInfo.username}
                    onChange = {handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>

            <div className={classes.formItem}>
                <label className={classes.formLabel}>Email</label>
                <input 
                    id = "email"
                    className = {classes.formInput}
                    type = "email" 
                    name = "email"
                    value = {userInfo.email}
                    onChange = {handleChange} 
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div className={classes.formItem}>
                <label className={classes.formLabel}>Password</label>
                <input 
                    id = "password"
                    className = {classes.formInput}
                    type = "password" 
                    name = "password"
                    value = {userInfo.password} 
                    onChange = {handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className={classes.formItem}>
                <label className={classes.formLabel}>Confirm Password</label>
                <input 
                    id = "rpassword"
                    className = {classes.formInput}
                    type = "password"
                    name = "rpassword"
                    value = {userInfo.rpassword}
                    onChange = {handleChange}
                />
                {errors.rpassword && <p>{errors.rpassword}</p>}
            </div>
            
            <div className={classes.formItem}>
                <input className={classes.signUpButton} type="submit" value="Sign Up"/>
            </div>
            { errors.registerError &&<div className={classes.submitError}>{errors.registerError}</div>}
        </form>
    ); 
}

export default RegisterForm; 