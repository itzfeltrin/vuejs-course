import { createStore } from 'vuex';
import { coachesModule } from './modules/coaches';

export const store = createStore({
    modules: {
        coaches: coachesModule,
    },
});
