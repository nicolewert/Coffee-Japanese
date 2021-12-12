import React from 'react'
import classes from './CoffeeLesson.module.css'

const CoffeeLesson  = () =>{
    return(
        <div className={classes.container}>
            <h2 className={classes.title}>Coffee Lesson- Title</h2>
            <p className={classes.body}>Body</p>
        </div>
    )
}
export default CoffeeLesson