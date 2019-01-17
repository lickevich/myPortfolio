
const heroMenu = document.querySelector('.hero__menu');
const overlayMenu = document.querySelector('.overlay-menu');
const menuNavItems = document.querySelectorAll('.menu-nav__item--overlay');
const navTrigger = document.querySelector('.nav-trigger');

heroMenu.addEventListener('click', toggleClass);

for (const iterator of menuNavItems) {
    iterator.addEventListener('click', toggleClass)
}

function toggleClass() {
    
    overlayMenu.classList.toggle('is-active');
    navTrigger.classList.toggle('is-active');
}