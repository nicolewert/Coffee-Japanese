import React from 'react'; 
import classes from './LoginForm.module.css'
import validate from './validateUserInfo'
import useLoginForm from './useLoginForm';

const LoginForm =() =>{
    const {handleChange, userInfo, handleSubmit, errors, submitFailure} = useLoginForm(validate)

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
                <p className={classes.smalltext}>Forgot Password?</p>
            </div>
            {submitFailure.message && <div className={classes.submitError}>{submitFailure.message}</div>}
    </form>
    ); 
}

export default LoginForm; 