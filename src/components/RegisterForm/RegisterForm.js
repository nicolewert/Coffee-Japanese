import React from 'react';
import classes from './RegisterForm.module.css'
import useRegisterForm from './useRegisterForm'
import validate from './validateUserInfo'

const RegisterForm = () => {
    const {handleChange, userInfo, handleSubmit, errors, submitFailure} = useRegisterForm(validate)

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
            </div>
            
            <div className={classes.formItem}>
                <input className={classes.signUpButton} type="submit" value="Sign Up"/>
            </div>
        </form>
    ); 
}

export default RegisterForm; 