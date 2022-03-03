import React from "react"
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import classes from './ChangePassword.module.css'
const ChangePassword = () =>{
    return(
        <>
        <Navbar/>
        <div className={classes.container}>
            <h2 className={classes.title}>Change Password</h2>
            <ChangePasswordForm/>
        </div>
        <Footer/>
        </>
    )
}

export default ChangePassword