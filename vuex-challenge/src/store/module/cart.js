export const cartModule = {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        addItem(state, item) {
            const isItemOnCart = state.items.find((el) => el.id === item.id);
            if (isItemOnCart) {
                const itemIndex = state.items.indexOf(isItemOnCart);
                state.items[itemIndex].qty += 1;
            } else {
                state.items.push({ ...item, qty: 1 });
            }
        },
        removeItem(state, item) {
            const itemIndex = state.items.findIndex((el) => el.id === item.id);
            if (state.items[itemIndex].qty > 1) {
                state.items[itemIndex].qty -= 1;
            } else {
                state.items.splice(itemIndex, 1);
            }
        },
    },
    actions: {
        addItem({ commit }, item) {
            commit('addItem', item);
        },
        removeItem({ commit }, item) {
            commit('removeItem', item);
        },
    },
    getters: {
        items(state) {
            return state.items;
        },
        totalQuantity(state) {
            return state.items.reduce((total, el) => total + el.qty, 0);
        },
        totalPrice(state) {
            const total = state.items.reduce(
                (total, el) => total + el.price,
                0
            );
            return Number(total).toFixed(2);
        },
    },
};
