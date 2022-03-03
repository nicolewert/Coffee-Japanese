export default function validatePasswordInfo(passwordInfo){
    let errors = {}
    
    //old password
    if(!passwordInfo.oldpassword){
        errors.oldpassword ="Current password is required" 
    } else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordInfo.oldpassword)){
        errors.oldpassword ="Password must be 8 characters long and contain at least 1 letter, 1 number, and 1 special character"
    } 

    //new password
    if(!passwordInfo.newpassword){
        errors.newpassword ="New password is required" 
    } else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordInfo.newpassword)){
        errors.newpassword ="Password must be 8 characters long and contain at least 1 letter, 1 number, and 1 special character"
    } else if(passwordInfo.oldpassword === passwordInfo.newpassword){
        errors.newpassword = "New password must be different from current password"
    }

    //confirm new password
    if(!passwordInfo.rpassword){
        errors.rpassword = "Confirm new password is required"
    }
    else if(passwordInfo.newPassword !== passwordInfo.rpassword){
        errors.rpassword = "Passwords must match"
    }
    return errors
}