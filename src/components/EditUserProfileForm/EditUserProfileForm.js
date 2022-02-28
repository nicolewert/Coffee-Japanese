import React from 'react'
import classes from './EditUserProfileForm.module.css'
import validate from './validateUserInfo'
import useEditUserProfileForm from './useEditUserProfileForm'

const EditUserProfileForm = () =>{
    const {handleChange, userInfo, handleSubmit, errors} = useEditUserProfileForm(validate)

    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div className={classes.formItem}>
            <label className={classes.formLabel}>Username</label>
            <input 
                id = "username"
                className = {classes.formInput}
                type = "text" 
                name = "username"
                placeholder='Cat' //Todo: replace with user data
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
                placeholder='cat@cat.co'
                value = {userInfo.email}
                onChange = {handleChange} 
            />
        </div>

        <div className={classes.formItem}>
            <label>Japanese Level</label>
            <select
                id="japaneseLevel"
                className={classes.formInput}
                name="japaneseLevel"
                value={userInfo.japaneseLevel} // 1 = Beginner (N5) --> must translate to int 
                onChange={handleChange}
            >
                <option>Beginner (N5)</option>
                <option>Low-Intermediate (N4)</option>
                <option>Hight-Intermediate (N3)</option>
                <option>Advanced (N2)</option>
                <option>Fluent (N1)</option>
            </select>

        </div>
        
        <div className={classes.formItem}>
            <input className={classes.saveButton} type="submit" value="Save"/>
        </div>
    </form>
    )
}

export default EditUserProfileForm