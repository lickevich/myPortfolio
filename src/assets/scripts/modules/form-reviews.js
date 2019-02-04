import axios from 'axios';
import appRequests from '../../../admin/requests.js';


const sendButton = document.querySelector('#reviews-button-send');
const clearButton = document.querySelector('#reviews-button-clear');
const reviewsForm = document.querySelector('#reviews-form');
const popup = document.querySelector('.popup-wrapper');
const popupButton = document.querySelector('.popup__button');

function clear() {
    reviewsForm.elements.name.style.border = "0";
    reviewsForm.elements.email.style.border = "0";     
    reviewsForm.elements.comment.style.border = "0";
    reviewsForm.reset();
}

clearButton.addEventListener('click', () => {
    clear();
});

sendButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm(reviewsForm)) {
        // popupAdd();
        // clear();
        const data = {
            name: reviewsForm.elements.name.value,
            email: reviewsForm.elements.email.value,
            comment: reviewsForm.elements.comment.value
        };
        console.log(reviewsForm.elements.name.value);


        axios.post('https://webdev-api.loftschool.com/login', data).then(response => {
            console.log(response)
            if (response.status <= 400) {
                popupAdd();
                clear();
            }
        }, error => {
            console.error(error);
        })
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.email)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {

    if (!field.checkValidity()) {
        field.style.border = '1px solid #16c2aa';

        return false;
    } else {
        field.style.border = '1px solid #e44845';

        return true;
    }
}


popup.addEventListener('click', (e) => {
    e.preventDefault();

    popupRemove();
})


popupButton.addEventListener('click', (e) => {
    e.preventDefault();

    popupRemove();
})

function popupAdd() {

    popup.classList.add('is-active');
}

function popupRemove() {

    popup.classList.remove('is-active');
}