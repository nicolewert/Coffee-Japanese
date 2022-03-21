import React, {useEffect} from 'react';
import classes from './RegisterForm.module.css'
import useRegisterForm from './useRegisterForm'
import validate from './validateUserInfo'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const {handleChange, userInfo, handleSubmit} = useRegisterForm(validate)
    const isAuthenticated = useSelector((state)=>{return state.auth.isAuthenticated})
    const user = useSelector(state=>{return state.user.user})
    const error = useSelector(state =>{return state.error.error})

    let navigate = useNavigate()
    useEffect(()=>{
        if (isAuthenticated&& user){
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
                {error && error.username && <p>{error.username}</p>}
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
                {error && error.email && <p>{error.email}</p>}
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
                {error && error.password && <p>{error.password}</p>}
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
                {error && error.rpassword && <p>{error.rpassword}</p>}
            </div>
            
            <div className={classes.formItem}>
                <input className={classes.signUpButton} type="submit" value="Sign Up"/>
            </div>
            { error && error.registerError &&<div className={classes.submitError}>{error.registerError}</div>}
        </form>
    ); 
}

export default RegisterForm; 