/* eslint-disable indent */
import { createStore } from 'vuex';

const counterModule = {
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

export const store = createStore({
    modules: {
        counter: counterModule,
    },
    state() {
        return {
            authenticated: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.authenticated = payload;
        },
    },
    actions: {
        logIn(context) {
            context.commit('setAuth', true);
        },
        logOut(context) {
            context.commit('setAuth', false);
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.authenticated;
        },
    },
});
