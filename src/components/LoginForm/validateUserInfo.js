export default function validateUserInfo(userInfo){
    let errors = {}

    //email
    if(!userInfo.email){
        errors.email = "Email required"
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email)){
        errors.email ="Email address is invalid"
    }
    
    //password
    if(!userInfo.password){
        errors.password ="Password is required" 
    } else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(userInfo.password)){
        errors.password ="Password must be 8 characters long and contain at least 1 letter, 1 number, and 1 special character"
    }
    
    return errors 
}