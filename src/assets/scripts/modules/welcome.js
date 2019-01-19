const user = document.querySelector('.user-welcome');
const auth = document.querySelector('.auth');
const authLink = document.querySelector('.welcome__auth');
const buttons = document.querySelector('.auth__form__buttons');
const button = buttons.firstElementChild;


authLink.addEventListener('click', toggleClass);

function toggleClass(e) {
    e.preventDefault();

    user.classList.toggle('is-active');
    auth.classList.toggle('is-active');
    authLink.classList.toggle('is-active');
}

button.addEventListener('click', toggleClass);
