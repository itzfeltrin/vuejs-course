export const requestsModule = {
    namespaced: true,
    state: {
        requests: [],
    },
    mutations: {
        addRequest(state, request) {
            state.requests.push(request);
        },
        setRequests(state, requests) {
            state.requests = requests;
        },
    },
    actions: {
        async contactCoach({ commit }, request) {
            const newRequest = {
                userEmail: request.email,
                message: request.message,
            };

            const res = await fetch(
                `https://vuejs-course-fc094-default-rtdb.firebaseio.com/requests/${request.coachId}.json`,
                {
                    method: 'POST',
                    body: JSON.stringify(newRequest),
                },
            );
            const data = await res.json();

            if (!res.ok) {
                const err = new Error(
                    data.message || 'Failed to send request.',
                );
                throw err;
            }

            const requestObj = {
                ...newRequest,
                id: data.name,
                coachId: request.coachId,
            };
            commit('addRequest', requestObj);
        },
        async loadRequests(context) {
            const coachId = context.rootGetters.userId;
            const res = await fetch(
                `https://vuejs-course-fc094-default-rtdb.firebaseio.com/requests/${coachId}.json`,
            );
            const data = await res.json();

            if (!res.ok) {
                const err = new Error(
                    data.message || 'Failed to load requests.',
                );
                throw err;
            }

            const requests = Object.keys(data).map((key) => ({
                id: key,
                coachId,
                ...data[key],
            }));
            context.commit('setRequests', requests);
        },
    },
    getters: {
        requests(state, _, _2, rootGetters) {
            const currentCoachId = rootGetters.userId;
            return state.requests.filter(
                (request) => request.coachId === currentCoachId,
            );
        },
    },
};
