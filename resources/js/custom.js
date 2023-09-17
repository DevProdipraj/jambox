// JavaScript For Responsive Menu

const menu_toggler = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");

menu_toggler.addEventListener("click", function(){
    this.classList.toggle("active");
    menu.classList.toggle("active");
})

// JavaScript for Sticky Navigation Bar

window.addEventListener("scroll", function(){

    var header = document.querySelector(".header-nav");
    header.classList.toggle("sticky", window.scrollY > 0);


})