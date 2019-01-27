import axios from 'axios';
import appRequests from '../../../admin/requests.js';

const enterButton = document.querySelector('#enter');
const authForm = document.querySelector('#auth-form');

enterButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (validateForm(authForm)) {
        const data = {
            name: authForm.elements.login.value,
            password: authForm.elements.password.value,
        };
        console.log(authForm.elements.login.value);


        axios.post('https://webdev-api.loftschool.com/login', data).then(response => {
            console.log(response)
            if (response.status == 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                appRequests.defaults.headers['Authorization'] = `Bearer ${token}`;
                // this.authorize();
            }
        }, error => {
            console.error(error);
        })

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
    const fieldParent = field.parentNode;
    const fieldParentPrev = fieldParent.previousElementSibling;
    const fieldParentPrevChild = fieldParentPrev.firstChild;

    field.addEventListener('focus', function() {
        field.nextElementSibling.style.visibility = 'hidden';
        field.style.border = '0';
        field.style.borderRadius = 'initial';
        fieldParentPrevChild.style.fill = '#e1e1d6';
    });

    if (!field.checkValidity()) {
        field.nextElementSibling.style.visibility = 'visible';
        field.style.border = '1px solid #e44845';
        field.style.borderRadius = '5px';
        fieldParentPrevChild.style.fill = '#e44845';

        return false;
    } else {
        field.nextElementSibling.style.visibility = 'hidden';
        field.style.border = '1px solid #16c2aa';
        field.style.borderRadius = '5px';
        fieldParentPrevChild.style.fill = '#16c2aa';

        return true;
    }
}


// import { mapMutations } from "vuex";

// methods: {
//     ...mapMutations({
//         authorize: "user/authorize"
//     })
// }