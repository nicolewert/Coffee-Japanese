import React, { useEffect } from "react"
import classes from './ChangePasswordForm.module.css'
import validate from "./validatePasswordInfo"
import useChangePasswordForm from './useChangePasswordForm'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

const ChangePasswordForm = () =>{
    const {handleChange, passwordInfo, handleSubmit} = useChangePasswordForm(validate)

    let navigate = useNavigate()

    const error = useSelector(state=>{
        return state.error
    })

    useEffect(()=>{
        if(!error.error && error.errorChecked ===true){
            navigate('/user-profile')
        }
    })
    return(
        <form className={classes.formContainer} onSubmit={handleSubmit}>
            <div className={classes.formItem}>
            <label className={classes.formLabel}>Current Password</label>
            <input 
                id = "oldpassword"
                className = {classes.formInput}
                type = "text" 
                name = "oldpassword"
                value = {passwordInfo.oldpassword}
                onChange = {handleChange}
            />
            {error.error && error.error.oldpassword && <p className={classes.inputError}>{error.error.oldpassword}</p>}
        </div>

        <div className={classes.formItem}>
            <label className={classes.formLabel}>New Password</label>
            <input 
                id = "newpassword"
                className = {classes.formInput}
                type = "text" 
                name = "newpassword"
                value = {passwordInfo.newpassword}
                onChange = {handleChange}
            />
            {error.error && error.error.newpassword && <p className={classes.inputError}>{error.error.newpassword}</p>}
        </div>
        
        <div className={classes.formItem}>
            <label className={classes.formLabel}>Confirm New Password</label>
            <input 
                id = "rpassword"
                className = {classes.formInput}
                type = "text" 
                name = "rpassword"
                value = {passwordInfo.rpassword}
                onChange = {handleChange}
            />
            {error.error && error.error.rpassword && <p  className={classes.inputError}>{error.error.rpassword}</p>}
        </div>

        <div className={classes.formItem}>
            <input className={classes.saveButton} type="submit" value="Save"/>
        </div>
        {error.error && error.error.changePasswordError && <div className = {classes.submitError}>{error.error.changePasswordError}</div>}
        </form>
    )
}

export default ChangePasswordForm