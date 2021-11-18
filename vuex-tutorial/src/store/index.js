import { createStore } from 'vuex';
import { counterModule } from './modules/counter';

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
