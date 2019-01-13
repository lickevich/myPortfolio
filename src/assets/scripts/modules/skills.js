import Vue from 'vue';

const skill = {
    template: "#skill"
}
const skillsRow = {
    template: "#skills-item",
    components: {
        skill
    }
}

new Vue({
    el: "#skills-component",
    components: {
        skillsRow
    },
    data() {
        return {
            skills: {}
        }
    },
    created () {
        this.skills = require('../../../assets/data/skills.json');
    },
    template: "#skills-list"
});