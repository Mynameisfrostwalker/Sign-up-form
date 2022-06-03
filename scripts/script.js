const theme = document.querySelector("input[type='checkbox']");
const html = document.querySelector("html");
const form = document.querySelector("form");
const button = document.querySelector("button");
const inputs = document.querySelectorAll("form input");
const password = document.querySelector("#Password");
const cpassword = document.querySelector("#CPassword");
const span = document.querySelector(".pass");

const changeTheme = () => {
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        html.classList.add("light");
        return
    }
    html.classList.add("dark");
    html.classList.remove("light");
}

const checkPassword = (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        if(!input.validity.valid) {
            input.nextElementSibling.nextElementSibling.textContent = "Input must not be left blank"
            input.classList.add("invalid");
            if(input.classList.contains("valid")) {
                input.classList.remove("valid");
            }
        } else {
            input.nextElementSibling.nextElementSibling.textContent = "";
            input.classList.add("valid");
            if(input.classList.contains("invalid")) {
                input.classList.remove("invalid");
            }
        }
    })
    let value = true;
    if(password.value !== cpassword.value) {
        span.textContent = "Passwords do not match!"
        value = false;
        password.classList.add("invalid");
        if(password.classList.contains("valid")) {
            password.classList.remove("valid");
        }
    }
}

theme.addEventListener("click", changeTheme);
button.addEventListener("click", checkPassword);