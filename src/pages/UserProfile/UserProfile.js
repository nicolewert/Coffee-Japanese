import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import classes from './UserProfile.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faLock } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
const UserProfile = () =>{
    const user = useSelector( state =>{
        return state.user.user
    })

    const japaneseLevelNumToText = (num) =>{
        switch(num){
            case 1:
                return "Beginner (N5)"
            case 2:
                return "Low-Intermediate (N4)"
            case 3: 
                return "High-Intermediate (N3)"
            case 4: 
                return "Advanced (N2)"
            case 5: 
                return "Fluent N(1)"
            default: 
                return "Beginner (N5)"
        }
    }

    return(
    <>
    <Navbar/>

    <div className={classes.userInfoContainer}>
        <h2 className={classes.title}>Profile</h2>

        <div className={classes.infoGroup}>
            <div className={classes.infoItem}>
                <p className={classes.label}>Username</p>
                <p className={classes.infoBox}>{user && user.username}</p>
            </div>
        
            <div className={classes.infoItem}>
                <p className={classes.label}>Email</p>
                <p className={classes.infoBox}>{user && user.email}</p>
            </div>
        
            <div className={classes.infoItem}>
                <p className={classes.label}>Japanese Level</p>
                <p className={classes.infoBox}>{user && japaneseLevelNumToText(user.japaneseLevel)}</p>
            </div>

            <div className={classes.linkGroup}>
                <p className={classes.linkItem}>
                    <Link to="/edit-user-profile" className={classes.link}>
                    <FontAwesomeIcon icon={faPenToSquare} className={classes.icon}/>
                    Edit User Info</Link>
                </p>

                <p className={classes.linkItem}>
                    <Link to="/change-password" className={classes.link}>
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