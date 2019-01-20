const enterButton = document.querySelector('#enter');
const authForm = document.querySelector('#auth-form');

enterButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm(authForm)) {
        console.log('все ок')

    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.login)) {
        valid = false;
    }
    if (!validateField(form.elements.password)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.style.display = 'block';

        return false;
    } else {
        field.nextElementSibling.style.display = 'none';

        return true;
    }
}