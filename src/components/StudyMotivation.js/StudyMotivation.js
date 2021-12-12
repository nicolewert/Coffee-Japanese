import React from 'react'
import classes from './StudyMotivation.module.css'

const StudyMotivation = () => {
    return(
        <div className={classes.container}>
            <h3>Study Motivation</h3>
            <div className={classes.quoteBox}>
                <p className={classes.quote}>quote</p>
            </div>
        </div>
    )
}

export default StudyMotivation