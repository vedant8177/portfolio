const menu = document.getElementsByClassName("navbar_btn")[0];
const close = document.getElementsByClassName("hamburger_close")[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const listItem = document.querySelectorAll(".hamburger_list_items");


close.addEventListener("click", () => {
    hamburger.style.transform = "translateY(-500px)";
});

menu.addEventListener("click", () => {
    hamburger.style.transform = "translateY(0)";
});

listItem.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.style.transform = "translateY(-500px)";
    })
})
