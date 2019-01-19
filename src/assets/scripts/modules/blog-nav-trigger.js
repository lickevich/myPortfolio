const trigger = document.querySelector('.blog__nav-trigger');
const blogAside = document.querySelector('.blog__aside');

trigger.addEventListener('click', function(e) {
    e.preventDefault();

    blogAside.classList.toggle('is-active');
});