const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#button");
const checkbox = document.querySelector("#checkbox");
const error_msg = document.querySelector(".error");


button.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(username.value.length === 0){
       username.style.border = "1px solid red";
       error_msg.textContent = "username is required";
        
       
    }else if(password.value.length === 0) {
        password.style.border = "1px solid red";
        error_msg.textContent = "password is required";

    }
    else {
        form.submit();
        alert("login success")

    }

   
})





