import React, { useEffect } from 'react'
import useDeleteAccountForm from './useDeleteAccountForm'
import classes from './DeleteAccountForm.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DeleteAccountForm =()=>{
    const {handleChange, password, handleSubmit} = useDeleteAccountForm()
    
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
                    id="password"
                    className={classes.formInput}
                    type="password"
                    name="password"
                    value={password.password}
                    onChange={handleChange}
                />
            </div>
            <div className={classes.formItem}>
                <p className={classes.warning}>This will result in the permanent deletion of your account. It cannot be undone.</p>
            </div>
            <div className={classes.formItem}>
                <input className={classes.submitButton} type="submit" value="Delete Account"/>
            </div>
            {error.error && error.error.deleteAccountError && <div className={classes.submitError}>{error.error.deleteAccountError}</div>}
        </form>
    )    
}
export default DeleteAccountForm