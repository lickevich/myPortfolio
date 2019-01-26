
const skills = {
    namespaced: true,
    state: {
        skills: []
    },
    mutations: {
        fillUpSkills: (state, skills) => state.skills = skills,
        addNewSkill: (state, newSkill) => state.skills.push(newSkill),
        removeSkill: (state, skillToRemoveId) =>
         (state.skills = state.skills.filter(
            skill => skill.id !== skillToRemoveId
         ))
    },
    actions: {
        fetch({ commit }) {
            this.$axios.get('/skills/1').then(response => {
                commit('fillUpSkills', response.data)
            })
        },
        add({ commit }, payload) {
          return this.$axios.post("/skills", payload).then(
            response => {
                commit('addNewSkill', response.date)
                return response;
            }
          ).catch(error => {
              throw error
          });
        },
        remove({ commit }, skillId) {
            this.$axios.delete(`/skills/${skillId}`).then(response => {
                commit('removeSkill', skillId)
            })
        }
    }
};

export default skills;