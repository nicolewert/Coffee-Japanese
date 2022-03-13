import React, { useEffect } from 'react'; 
import classes from './LoginForm.module.css'
import validate from './validateUserInfo'
import useLoginForm from './useLoginForm';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm =() =>{
    const {handleChange, userInfo, handleSubmit, errors} = useLoginForm(validate)
    const isAuthenticated = useSelector((state)=>{return state.auth.isAuthenticated})
    const user = useSelector(state =>{return state.user.user})

    let navigate = useNavigate()
    useEffect(() =>{
        if(isAuthenticated && user){
            navigate("/home")
        }
    })

    return(
        <form onSubmit={handleSubmit} className={classes.loginFormContainer}>
            <div className={classes.formItem}>
                <label className={classes.formLabel}>Email</label>
                <input
                    id="email" 
                    className= {classes.formInput}
                    type="email"
                    name="email" 
                    value={userInfo.email}
                    onChange={handleChange}
                />
                {errors.email && <p className={classes.inputError}>{errors.email}</p>}
            </div>

            <div className={classes.formItem}>
                <label className={classes.formLabel}>Password</label>
                <input 
                    id="password"
                    className={classes.formInput}
                    type="password" 
                    name="password" 
                    value={userInfo.password}
                    onChange={handleChange}
                />
                {errors.password && <p className={classes.inputError}>{errors.password}</p>}
            </div>

            <div className={classes.formItem}>
                <input className={classes.loginButton} type="submit" value="Login"/>
                {/* <p className={classes.smalltext}>Forgot Password?</p> */}
            </div>
            {errors.loginError && <div className={classes.submitError}>{errors.loginError}</div>}
    </form>
    ); 
}

export default LoginForm; 