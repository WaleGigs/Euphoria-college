const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
     
     
   
     
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
        document.getElementById('boot').hidden= false;
        document.getElementById('copy').hidden= true;
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
      
      let name = document.getElementById("name").value;
let emails = document.getElementById("email").value;
let passwords = document.getElementById("password").value;

function addd(value) {
    let fm = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value, 
    }
    console.log(fm)
    alert("Your information are safe")
}
      