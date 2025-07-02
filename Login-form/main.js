const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;
const form = document.getElementById("formArea");
const sign = document.getElementById("sign");


function login(event){
    event.preventDefault();

    if(password.length > 12){
        alert("Password is too long");
        return false;
    } else{
        alert("You are loggedIn");
    }

    alert("Login button clicked");
}

function showSignUp(){
    alert("Signup button clicked");
}