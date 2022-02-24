import React, { useEffect, useState } from 'react'
import DailyKanji from '../../components/DailyKanji/DailyKanji'
import StudyMotivation from '../../components/StudyMotivation.js/StudyMotivation'
import Navbar from '../../components/Navbar/Navbar'
import classes from './Home.module.css'
import Footer from '../../components/Footer/Footer'
import instance from '../../axiosInstance/axios'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () =>{
    // const token = useSelector((state)=>{
    //     return state.auth.token
    // })

    const [homeData, setHomeData] = useState()

    const getHomeData = async()=>{
        instance.get("/home/"
        //Todo: add auth middleware back to api call and uncomment header
        //, 
        // {
        //     headers: {
        //         'x-auth-token': token
        //     }
        // }
        )
        .then(res =>{
            setHomeData(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
      //run effect and clean up only once by providing empty array as second arg
    useEffect(()=>{getHomeData()}, [])
   
    const navigate = useNavigate()
    return(
        <>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.item}>
                    <h2>Welcome to Coffee Japanese -</h2>
                    <p>Learn Japanese in small bits just long enough to look over while having a nice coffee!☕</p>
                </div>
                <div className={classes.item}>
                    <p>Brew yourself a coffee and click coffee time to start your lesson!</p>
                    <div className={classes.buttonContainer}>
                        <button className={classes.coffeeButton} onClick={()=>navigate("/coffee-lesson")}>Coffee Time!</button>
                    </div>
                </div>
                <div className={classes.item}>
                    <DailyKanji kanji={homeData}/>
                </div>
                <div className={classes.item}>
                    <StudyMotivation quote={homeData}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home