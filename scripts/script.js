const theme = document.querySelector("input[type='checkbox']");
const html = document.querySelector("html");

const changeTheme = () => {
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        html.classList.add("light");
        return
    }
    html.classList.add("dark");
    html.classList.remove("light");
}

theme.addEventListener("click", changeTheme);