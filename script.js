const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
const mobileLinks = document.querySelectorAll(".mobile-menu-links a");
const mobileCta = document.querySelector(".mobile-menu-cta");


function openMenu() {
    mobileMenu.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}


function closeMenu() {
    mobileMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}


menuToggle.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);


mobileLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
});


mobileCta.addEventListener("click", closeMenu);