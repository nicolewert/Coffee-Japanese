import React from "react"
import classes from './ChangePasswordForm.module.css'
import validate from "./validatePasswordInfo"
import useChangePasswordForm from './useChangePasswordForm'

const ChangePasswordForm = () =>{
    const {handleChange, passwordInfo, handleSubmit, errors} = useChangePasswordForm(validate)

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
            {errors.oldpassword && <p>{errors.oldpassword}</p>}
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
            {errors.newpassword && <p>{errors.newpassword}</p>}
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
            {errors.rpassword && <p>{errors.rpassword}</p>}
        </div>

        <div className={classes.formItem}>
            <input className={classes.saveButton} type="submit" value="Save"/>
        </div>
        </form>
    )
}

export default ChangePasswordForm