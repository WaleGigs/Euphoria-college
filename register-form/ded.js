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