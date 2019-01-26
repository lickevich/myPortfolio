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
import skillsRow from "./skillsRow.vue";
import { mapActions, mapState } from 'vuex';

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
        }
    },
    computed: {
        ...mapState('skills', {
            skills: state => state.skills
        })
    },
    created() {
        this.fetchSkills()
    },
    methods: {
        ...mapActions({
            fetchSkills: "skills/fetch"
        })
    }
}
</script>

<style lang="scss" scoped>

.about__title {
    padding: 30px 0;
}

</style>



