<template lang="pug">
    .about
      h2.about__title Страница «Обо мне» 
      skillsRow(
        v-for="type in types"
        :key="type.id"
        :type="type"
        :skills="skills"
      )
</template>

<script>
const data = [
    {id: 1, title: "Html", percent: 20 , category: 0},
    {id: 2, title: "php", percent: 20 , category: 1},
    {id: 3, title: "css", percent: 20 , category: 0},
    {id: 4, title: "node.js", percent: 30 , category: 1},
    {id: 5, title: "Mongo", percent: 20 , category: 1},
    {id: 6, title: "Git", percent: 20 , category: 2},
    {id: 7, title: "Gulp", percent: 20 , category: 2}
];

import skillsRow from "./skillsRow.vue";

export default {
components: {
    skillsRow
},
data() {
    return {
        types: [
            { id: 0, name: "Frontend" },
            { id: 1, name: "Backend" },
            { id: 2, name: "Workflow" }
        ],
        skills: data
    }
}
}
</script>

<style lang="scss" scoped>

.about__title {
    padding: 30px 0;
}

</style>



