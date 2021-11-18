export const authModule = {
    namespaced: true,
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
    },
    actions: {
        logIn({ commit }) {
            commit('setAuthenticated', true);
        },
        logOut({ commit }) {
            commit('setAuthenticated', false);
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
    },
};
