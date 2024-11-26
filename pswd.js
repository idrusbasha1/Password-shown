password = document.getElementById("password")
icon=document.querySelector("i")


function shown(a){
    if(password.type === "password"){
        password.type="text"
        icon.className=`fa-solid fa-eye`
    }else{
        password.type="password"
        icon.className=`fa-solid fa-eye-slash`
    }
    
}