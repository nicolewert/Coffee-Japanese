import React, { useEffect } from 'react'
import classes from './EditUserProfileForm.module.css'
import validate from './validateUserInfo'
import useEditUserProfileForm from './useEditUserProfileForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const EditUserProfileForm = () =>{
    const {handleChange, userInfo, handleSave} = useEditUserProfileForm(validate)
    
    let navigate = useNavigate()
    
    const user = useSelector(state =>{
        return state.user.user
    })
    const error = useSelector(state=>{
        return state.error
    })

    useEffect(()=>{
        if(!error.error && error.errorChecked===true){
            navigate('/user-profile')
        }
    })

    return (
        <form onSubmit={handleSave} className={classes.formContainer}>
        <div className={classes.formItem}>
            <label className={classes.formLabel}>Username</label>
            <input 
                id = "username"
                className = {classes.formInput}
                type = "text" 
                name = "username"
                placeholder={user.username}
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
                placeholder={user.email}
                value = {userInfo.email}
                onChange = {handleChange} 
            />
            {error.error && error.error.email && <p className={classes.inputError}>{error.error.email}</p>}
        </div>

        <div className={classes.formItem}>
            <label>Japanese Level</label>
            <select
                id="japaneseLevel"
                className={classes.formInput}
                name="japaneseLevel"
                value={userInfo.japaneseLevel || user.japaneseLevel}
                onChange={handleChange}
            >
                <option value="1">Beginner (N5)</option>
                <option value="2">Low-Intermediate (N4)</option>
                <option value="3">Hight-Intermediate (N3)</option>
                <option value="4">Advanced (N2)</option>
                <option value="5">Fluent (N1)</option>
            </select>
        </div>
        <div className={classes.formItem}>
            <input className={classes.saveButton} type="submit" value="Save"/>
        </div>
        { error.error && error.error.updateError && <div className={classes.saveError}>{error.error.updateError}</div>}
    </form>
    )
}

export default EditUserProfileForm