import React, {useState} from 'react'
import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>{
    const [sideNav, setSideNav] = useState(false)
    const toggleSideNav = () => setSideNav(!sideNav)

    return(
        <>
        <nav className={classes.navbar}>
            <FontAwesomeIcon icon={faCoffee} className={classes.icon}/>
            <h1 className={classes.navItem}>Coffee Japanese</h1>
            <FontAwesomeIcon icon={faBars} className={classes.icon} onClick={toggleSideNav}/>
        </nav>
        <div className={sideNav? classes.sideNavActive : classes.sideNav}>
            <FontAwesomeIcon icon={faTimes} className={classes.icon +" "+ classes.sideNavClose} onClick={toggleSideNav}/>
            <ul>
                <li className={classes.sideNavItem}>
                    <a href="/home">Home</a>
                </li>
                {/* <li className={classes.sideNavItem}>
                    <a href="/">User Profile</a>
                </li>
                <li className={classes.sideNavItem}>
                    <a href="/">Contact Us</a>
                </li> */}
                <li className={classes.sideNavItem}>
                    <a href="/">Logout</a>
                </li>
            </ul>
        </div>
        </>
    ) 
}

export default Navbar