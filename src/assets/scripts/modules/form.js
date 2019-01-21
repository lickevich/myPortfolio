const enterButton = document.querySelector('#enter');
const authForm = document.querySelector('#auth-form');

enterButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm(authForm)) {
        const data = {
            login: authForm.elements.login.value,
            password: authForm.elements.password.value,
            human: authForm.elements.human.checked,
            question: authForm.elements.question.value
        };
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', function() {
            if (xhr.response.status) {
                console.log('все ок');
            }
        });
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

    field.addEventListener('focus', function() {
        field.nextElementSibling.style.visibility = 'hidden';
    });

    if (!field.checkValidity()) {
        field.nextElementSibling.style.visibility = 'visible';

        return false;
    } else {
        field.nextElementSibling.style.visibility = 'hidden';

        return true;
    }
}
