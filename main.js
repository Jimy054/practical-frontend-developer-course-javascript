var navEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
var menuHamIcon = document.querySelector(".menu");
var mobileMenu = document.querySelector(".mobile-menu")
var menuCar = document.querySelector(".navbar-shopping-cart");
var aside = document.querySelector(".product-detail");

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCar.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');    
    aside.classList.add('inactive');
}
function toggleCarAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
