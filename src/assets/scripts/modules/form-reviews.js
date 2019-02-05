import axios from 'axios';
import appRequests from '../../../admin/requests.js';


const sendButton = document.querySelector('#reviews-button-send');
const clearButton = document.querySelector('#reviews-button-clear');
const reviewsForm = document.querySelector('#reviews-form');
const popup = document.querySelector('.popup-wrapper');
const popupButton = document.querySelector('.popup__button');

popup.addEventListener('click', (e) => {
    e.preventDefault();

    popupRemove();
})


popupButton.addEventListener('click', (e) => {
    e.preventDefault();

    popupRemove();
    clear();
})

function popupAdd() {

    popup.classList.add('is-active');
}

function popupRemove() {

    popup.classList.remove('is-active');
}

function clear() {
    reviewsForm.elements.name.style.border = "none";
    reviewsForm.elements.email.style.border = "none";      
    reviewsForm.elements.comment.style.border = "none";
    reviewsForm.reset();
}

clearButton.addEventListener('click', () => {
    clear();
});

sendButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm(reviewsForm)) {
        popupAdd();
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
        field.style.border = '1px solid #e44845';

        return false;
    } else {
        field.style.border = '1px solid #16c2aa';

        return true;
    }
}



