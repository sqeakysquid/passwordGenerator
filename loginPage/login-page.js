const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        // alert("You have successfully logged in.");
        window.location.href = "../passwordGenerator.html";
    } else {
        document.querySelector("#login-error-msg-holder").style.visibility = "visible";

    }
})

function closeModal (){
            document.querySelector("#login-error-msg-holder").style.visibility = "hidden"
}