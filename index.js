var btn = document.getElementById('btn');
var content = document.getElementById('content');
var loginSingUp = document.getElementById('login-singup');

loginSingUp.style.display = "none";

btn.addEventListener("click", () => {
    content.style.display = "none";
    loginSingUp.style.display = "block";
});


var home = document.getElementById('home');

home.addEventListener("click",() => {
    content.style.display = "block";
    loginSingUp.style.display = "none";
});


var login = document.getElementById('login');
var singUp = document.getElementById('singup');
var loginBtn = document.getElementById('login-btn');
var singUpBtn = document.getElementById('singup-btn');

singUp.style.display = "none";

loginBtn.addEventListener("click", () => {
    loginBtn.style.backgroundColor = "#0275d8";
    singUpBtn.style.backgroundColor = "transparent";
    login.style.display = "flex";
    singUp.style.display = "none";
});

singUpBtn.addEventListener("click", () => {
    singUpBtn.style.backgroundColor = "#0275d8";
    loginBtn.style.backgroundColor = "transparent";
    singUp.style.display = "flex";
    login.style.display = "none";
});