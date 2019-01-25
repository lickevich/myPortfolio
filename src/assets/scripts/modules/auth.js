import Vue from 'vue';
import axios from 'axios';

export default {
    data() {
        return {
            user: {
                login: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            axios.post('http://webdev-api.loftschool.com/login', this.user).then(response => {
                if (response.status == 200) {
                    localStorage.setItem('token', response.data.token);
                }
            }, error => {
                console.error(error);
            })
        }
    }
}

new Vue({
    el: "#auth-root",
    template: "#auth"
});