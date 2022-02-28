import React from 'react' 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import classes from './EditUserProfile.module.css'
import EditUserProfileForm from '../../components/EditUserProfileForm/EditUserProfileForm'

const EditUserProfile = () => {
    return(
        <>
        <Navbar/>
        <div className={classes.container}>
            <h2>Edit User Profile</h2>
            <EditUserProfileForm/>
        </div>
        <Footer/>
        </>
    )
}

export default EditUserProfile