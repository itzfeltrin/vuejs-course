export const requestsModule = {
    namespaced: true,
    state: {
        requests: [],
    },
    mutations: {
        addRequest(state, request) {
            state.requests.push(request);
        },
    },
    actions: {
        contactCoach({ commit }, request) {
            const newRequest = {
                id: new Date().toISOString(),
                coachId: request.coachId,
                userEmail: request.email,
                message: request.message,
            };
            commit('addRequest', newRequest);
        },
    },
    getters: {
        requests(state) {
            return state.requests;
        },
    },
};
