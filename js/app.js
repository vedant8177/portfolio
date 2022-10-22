const menu = document.getElementsByClassName("navbar_btn")[0];
const close = document.getElementsByClassName("hamburger_close_btn")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];

close.addEventListener("click", () => {
    hamburger.style.transform = "translateX(1000px)";
})

menu.addEventListener("click", () => {
    hamburger.style.transform = "translateX(0)";
})