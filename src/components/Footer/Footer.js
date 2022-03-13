import classes from './Footer.module.css'
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div className={classes.footer}>
            <FontAwesomeIcon icon={faCoffee}  className={classes.icon}/>
            <p className={classes.copyright}>© 2022 Coffee Japanese</p>
        </div>
    )
}

export default Footer