import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import classes from './UserProfile.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faLock } from '@fortawesome/free-solid-svg-icons'
const UserProfile = () =>{
    

    return(
    <>
    <Navbar/>

    <div className={classes.userInfoContainer}>
        <h2>Profile</h2>

        <div className={classes.infoGroup}>
            <div className={classes.infoItem}>
                <p className={classes.label}>Username</p>
                <p className={classes.infoBox}>cat</p>
            </div>
        
            <div className={classes.infoItem}>
                <p className={classes.label}>Email</p>
                <p className={classes.infoBox}>cat@cat.co</p>
            </div>
        
            <div className={classes.infoItem}>
                <p className={classes.label}>Japanese Level</p>
                <p className={classes.infoBox}>Beginner(N5)</p>
            </div>

            <div className={classes.linkGroup}>
                <p className={classes.linkItem}>
                    <Link to="/" className={classes.link}>
                    <FontAwesomeIcon icon={faPenToSquare} className={classes.icon}/>
                    Edit User Info</Link>
                </p>

                <p className={classes.linkItem}>
                    <Link to="/" className={classes.link}>
                    <FontAwesomeIcon icon={faLock} className={classes.icon}/>
                    Change Password?</Link>
                </p>
            </div>
        </div>

    </div>
    <Footer/>
    </>
    )
}

export default UserProfile