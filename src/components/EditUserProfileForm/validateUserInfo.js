export default function validateEditUserProfile(userInfo){
    let errors = {}
    //email
    if(userInfo.email && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(userInfo.email)){
        errors.email ="Email address is invalid"
    }

    return errors
}