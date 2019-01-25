<template lang="pug">
    .skills
      h3.skills__title {{type.name}}
      table.skills__table
        skillsComp(
            v-for="skill in skills"
            v-if="type.id == skill.category"
            :key="skill.id"
            :skill="skill"
        )
        skillsComp(
            :editmode="true"
            :typeId="type.id"
        )
      HR
</template>

<script>
import skillsComp from "./skillsComp.vue";

export default {
    components: {
        skillsComp
    },
    props: {
        type: {
            type: Object,
            default: () => {} // Значение по умолчанию, если ничего не передано, будет пустой объект.
        },
        skills: {
            type: Array,
            default: () => []
        }
    }

}
</script>

