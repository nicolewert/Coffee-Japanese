import React from "react"
import DeleteAccountForm from "../../components/DeleteAccountForm/DeleteAccountForm"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import classes from './DeleteAccount.module.css'

const DeleteAccount = () =>{
    return(
        <>
        <Navbar/>
        <div className={classes.container}>
            <h2 className={classes.title}>Delete Account</h2>
            <DeleteAccountForm/>
        </div>
        <Footer/>
        </>
    )
}

export default DeleteAccount