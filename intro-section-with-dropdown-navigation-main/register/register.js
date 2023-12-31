const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#button");
const error_msg = document.querySelector("#msg");


button.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(fname.value.length === 0){
       fname.style.border = "1px solid red";
       error_msg.textContent = "First is required";
      
       
       
    }else if(lname.value.length === 0) {
        lname.style.border = "1px solid red";
        error_msg.textContent = "Last is required";
       
        
    }else if(email.value.length === 0) {
        email.style.border = "1px solid red";
        error_msg.textContent = "email is required";
       
        
    }else if(password.value.length === 0) {
        password.style.border = "1px solid red";
        error_msg.textContent = "password is required";
       
        
    }
    
    
    else if(password.value.length <= 5) {
        error_msg.textContent = "password too short"
       
    }
    else {
        form.submit();
        alert("register success")

    }

   
})




