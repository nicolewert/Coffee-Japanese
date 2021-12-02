import React from 'react';
import classes from './RegisterForm.module.css'
import useRegisterForm from './useRegisterForm'
import validate from './validateUserInfo'

const RegisterForm = () => {
    const {handleChange, userInfo, handleSubmit, errors, submitFailure} = useRegisterForm(validate)

    return(
        <form className={classes.registerFormContainer} onSubmit={submitHandler}>
            <div className={classes.formItem}>
                <label className={classes.formLabel}>Username</label>
                <input 
                    className={classes.formInput}
                    type ="text" 
                    name="username" 
                    id="username"
                    onChange={e=>setInfo({...info, username: e.target.value})}
                    value={info.username}
                />
            </div>

            <div className={classes.formItem}>
                <label className={classes.formLabel}>Email</label>
                <input 
                    className={classes.formInput}
                    type ="email" 
                    name="email" 
                    id="email"
                    onChange={e=>setInfo({...info, email: e.target.value})}
                    value={info.email}
                />
            </div>

            <div className={classes.formItem}>
                <label className={classes.formLabel}>Password</label>
                <input 
                    className={classes.formInput}
                    type ="password" 
                    name="password" 
                    id="password"
                    onChange={e=>setInfo({...info, password: e.target.value})}
                    value={info.password}
                />
            </div>
            <div className={classes.formItem}>
                <label className={classes.formLabel}>Confirm Password</label>
                <input 
                    className={classes.formInput}
                    type ="password"
                    name="rpassword"
                    id="rpassword"
                    onChange={e =>setInfo({...info, rpassword: e.target.value})}
                    value={info.rpassword}
                />
            </div>
            
            <div className={classes.formItem}>
                <input className={classes.signUpButton} type="submit" value="Sign Up"/>
            </div>
        </form>
    ); 
}

export default RegisterForm; 