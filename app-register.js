function seePassword() {
    let seePassword = document.getElementById("password");
    let icon = document.getElementById("icon");
    if(seePassword.type == "password"){
        seePassword.type="text";
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash");
    }else{
        seePassword.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function seeConfirmPassword() {
    let seeConfirmPassword = document.getElementById("passwordconfirm");
    let icon = document.getElementById("icon1");
    // console.log(icon);
    if(seeConfirmPassword.type == "password") {
        seeConfirmPassword.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {
        seeConfirmPassword.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function seePassword() {
    let seePassword = document.getElementById("password");
    let icon = document.getElementById("icon");
    if (seePassword.type == "password") {
        seePassword.type = "text";
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash");
    } else {
        seePassword.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function seeConfirmPassword() {
    let seeConfirmPassword = document.getElementById("passwordconfirm");
    let icon = document.getElementById("icon1");
    // console.log(icon);
    if (seeConfirmPassword.type == "password") {
        seeConfirmPassword.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {
        seeConfirmPassword.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function checkUserName(username) {
    let re = /^[a-zA-Z0-9\-]+$/;
    if(re.test(username)) {
        return true
    } else {
        return false;
    }
}
function checkEmail(mail) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(mail)){
        return true
    } else {
        return false
    }
}

function register(){
  
    let username = document.getElementById("username").value;
    let errorUsername = document.getElementById(`errorUsername`);
    // console.log(checkUserName(username));
    if(checkUserName(username) == false) {
        errorUsername.setAttribute("style","display:block; color:red");
    } else {
        errorUsername.setAttribute("style","display:none");
        document.getElementById("username").value = "";
    }
    let mail = document.getElementById("email").value;
    let errorEmail = document.getElementById(`errorEmail`);
    // console.log(checkEmail(mail));
    // console.log(errorEmail);
    if (checkEmail(mail) == false) {
        errorEmail.setAttribute("style","display:block; color:red");
    } else {
        errorEmail.setAttribute("style","display:none");
        document.getElementById("email").value = "";
    }

    let pass = document.getElementById("password").value;
    let p = document.getElementById("error");
    if (pass.length < 6 || pass.indexOf(" ") != -1) {
        p.setAttribute("style","display:block;color:red");
    } else {
        p.setAttribute("style","display:none");
        document.getElementById("password").value = "";
    }

    let pConfirm = document.getElementById("confirmError");
    let passConfirm = document.getElementById("passwordconfirm").value;
    if(passConfirm !== pass) {
        pConfirm.setAttribute("style","display:block;color:red");
        document.getElementById("passwordconfirm").value = "";
    } else {
        pConfirm.setAttribute("style","display:none");
        document.getElementById("passwordconfirm").value = "";
    }


    if(checkUserName(username) && checkEmail(mail) && (pass.length >=6 ) && (passConfirm == pass))
    {
      
        let obj = {
            username: username,
            email: mail,
            password: pass
        }
        let getInformation = localStorage.getItem("information");
        if(getInformation == null){
            getInformation = [];
            getInformation.push(obj);
            // console.log("111111");
            localStorage.setItem("information",JSON.stringify(getInformation));
            alert("Đăng kí thành công")
            window.location.href = "index-login.html"
        } else {
            getInformation = JSON.parse(getInformation);
            let emailExits = document.getElementById("emailExits");
            let flag = false;
            for(let i = 0; i < getInformation.length; i++){
                if(obj.email == getInformation[i].email) {
                    emailExits.setAttribute("style","display:block;color:red");
                    flag = false;
                    return;
                }else{
                    flag=true;
                }
            }
            if(flag==true){
                getInformation.push(obj)
                localStorage.setItem("information",JSON.stringify(getInformation))
            }
            
        }
    }
    

}
