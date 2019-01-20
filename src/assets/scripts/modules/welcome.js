const front = document.querySelector('.user-welcome__front');
const back = document.querySelector('.user-welcome__back');
const authLink = document.querySelector('.welcome__auth');
const buttons = document.querySelector('.auth__form__buttons');
const button = buttons.firstElementChild;


authLink.addEventListener('click', toggleClass);

function toggleClass(e) {
    e.preventDefault();

    front.classList.toggle('is-active');
    back.classList.toggle('is-active');
    authLink.classList.toggle('is-active');
}

button.addEventListener('click', toggleClass);
