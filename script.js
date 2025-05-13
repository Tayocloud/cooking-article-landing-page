function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}
let theme = document.querySelector(".theme");
theme.addEventListener("click", changeTheme);
