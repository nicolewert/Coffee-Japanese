import React, {useState} from 'react'; 
import classes from './LoginForm.module.css'

const LoginForm =({Login, error}) =>{
    const [info, setInfo] = useState({email:"", password:""}) 

    const submitHandler = e => {
        e.preventDefault(); 
        Login(info)
    }

    return(
        <form onSubmit={submitHandler} className={classes.loginFormContainer}>
            <div className={classes.formItem}>
                <label className={classes.formLabel}>Email</label>
                <input
                    className= {classes.formInput}
                    type="email"
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
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={e=>setInfo({...info, password: e.target.value})}
                    value={info.password}
                />
            </div>

            <div className={classes.formItem}>
                <input className={classes.loginButton} type="submit" value="Login"/>
                <p className={classes.smalltext}>Forgot Password?</p>
            </div>
    </form>
    ); 
}

export default LoginForm; 