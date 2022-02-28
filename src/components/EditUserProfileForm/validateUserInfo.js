export default function validateEditUserProfile(userInfo){
    let errors = {}

    //username
    if(!userInfo.username.trim()){
        errors.username = "Username required"
    }

    //email
    if(!userInfo.email){
        errors.email = "Email required"
    } else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(userInfo.email)){
        errors.email ="Email address is invalid"
    }

    return errors
}