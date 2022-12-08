var navEmail = document.querySelector(".navbar-email");
var desktopMenu = document.querySelector(".desktop-menu");
navEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
