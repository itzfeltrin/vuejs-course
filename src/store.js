/* eslint-disable indent */
import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            counter: 0,
            authenticated: false,
        };
    },
    mutations: {
        increment(state) {
            state.counter += 2;
        },
        increase(state, payload) {
            state.counter += payload;
        },
        setAuth(state, payload) {
            state.authenticated = payload;
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
        logIn(context) {
            context.commit('setAuth', true);
        },
        logOut(context) {
            context.commit('setAuth', false);
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
        isAuthenticated(state) {
            return state.authenticated;
        },
    },
});
