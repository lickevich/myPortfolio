
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

    if (validateForm(reviewsForm) == true) {
        popup.style.visibility = "visible";
        clear();
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

popup.addEventListener('click', (e) => {
    e.preventDefault();

    popup.style.visibility = "hidden";
})

popupButton.addEventListener('click', (e) => {
    e.preventDefault();

    popup.style.visibility = "hidden";
})

