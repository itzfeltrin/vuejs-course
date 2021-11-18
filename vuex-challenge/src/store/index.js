import { createStore } from 'vuex';
import { authModule } from './module/auth';
import { cartModule } from './module/cart';

export const store = createStore({
    modules: {
        auth: authModule,
        cart: cartModule,
    },
});
