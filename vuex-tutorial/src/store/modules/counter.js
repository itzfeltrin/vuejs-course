/* eslint-disable indent */
export const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter += 2;
        },
        increase(state, payload) {
            state.counter += payload;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            return getters.finalCounter < 0
                ? 0
                : getters.finalCounter > 100
                ? 100
                : getters.finalCounter;
        },
    },
};