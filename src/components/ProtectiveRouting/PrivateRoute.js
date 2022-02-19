import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({component: Component}) =>{
    const isAuth = useSelector(state=> state.auth.isAuthenticated)
    
    if (isAuth) return <Component/>
    return <Navigate to="/login"/>
}

export default PrivateRoute