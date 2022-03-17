import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import classes from './CoffeeLesson.module.css'
import instance from '../../axiosInstance/axios'
import { useSelector } from 'react-redux'
import { authFailureError } from '../../middleware/authFailureCheck'

const CoffeeLesson  = () =>{
    const [lesson, setLesson] = useState()
    
    const token = useSelector((state)=>{
        return state.auth.token
    })

    useEffect(()=>{
        instance.get("/lessons", 
        {
            headers: {
                'x-auth-token': token,
            }
        })
        .then(res =>{
            setLesson(res.data)
        })
        .catch(error =>{
            authFailureError(error)
            console.log(error)
        })
    },[token])
    
    return(
        <>
            <Navbar/>
            <div className={classes.container}>
                <h2 className={classes.title}>Coffee Lesson- {lesson && lesson.title}</h2>
                <p className={classes.body}>{lesson && lesson.body}</p>
            </div>
            <Footer/>
        </>
    )
}
export default CoffeeLesson