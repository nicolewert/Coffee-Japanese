import {useState} from 'react'

const useEditUserProfileForm = (validate) =>{
    
    const [userInfo, setUserInfo] = useState({
        username:"", 
        email:"",
        japaneseLevel:""
    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target 
        setUserInfo({
            ...userInfo,
            [name]: value 
        })
    }
     
    const handleSubmit = async e =>{
        e.preventDefault()

        //use frontend validation on userInfo
        const errorsFound = await validate(userInfo)
        setErrors(errorsFound)

        //if no errors, update
        if(Object.keys(errorsFound).length ===0){
            //todo
        }
    }

    return {handleChange, userInfo, handleSubmit, errors}
}

export default useEditUserProfileForm