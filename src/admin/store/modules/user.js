const user = {
    state: {
        isAuth: false,
        id: 0
    },
    mutations: {
        addUserId(state, id) {
            state.id = id
        },
        authorize(state, bool) { state.isAuth = bool },

    },
    actions: {
        logout({ commit }) {
            commit('unAuthorize');
            localStorage.removeItem('token');
            window.location.reload();
        }
    }
}

export default user;